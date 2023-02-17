const mqtt = require('./mqttClient/mqtt');
const subscriber = require('./mqttClient/sub');
const publisher = require('./mqttClient/pub');
const fetch = require("node-fetch"); // npm install node-fetch // npm install --save esm 

const the_url = "https://raw.githubusercontent.com/feldob/dit355_2020/master/dentists.json";

function exitHandler(options, exitCode) {
  let topics = ['/requestList', '/requestAppointment']
  if (options.exit) 

  {   console.log(exitCode)
      mqtt.unsubscribe(topics); 
      console.log('Unsubscribed and ended the client');
      process.exit();
  }
}

//when app is closing
process.on('exit', exitHandler.bind(null,{exit:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));



function fetchFile(url, topicName){
  fetch(url)
    .then(res => res.json())
    .then((file) => {
      publisher.pubToTopic(topicName, JSON.stringify(file), 1);

    }).catch(err => console.error(err));
}


function Run(){
  console.log("Server started: >>>");
  mqtt.on('connect', () => {
    subscriber.subToTopic("/requestList", 1);
    subscriber.subToTopic("/requestAppointment", 1);

    mqtt.on('message', (topic) => {
      if (topic === '/requestList') {
        fetchFile(the_url, '/jsonData');
      } else if (topic === '/requestAppointment') {
        fetchFile(the_url, '/jsonDataToAppointment');
      }
      });
  });
}

Run(); 
