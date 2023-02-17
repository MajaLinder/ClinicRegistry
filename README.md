# ClinicRegistry


The ClinicRegistry component fetches clinic registry data from a URL and publishes the clinic data upon received request. 


## Server Structure

| File        | Purpose           | 
| ------------- | ------------- |
| [README.md](./README.md) | Everything about the client |
| [src](./src)| source code |
| src/main.js| publishes dentistry data |
| src/dentistry.json|provides dentistry data|
| src/package-lock.json| Project meta-information |
| src/package.json| Project meta-information |


# Component diagram
![ClinicRegistry](/diagrams/Dentistry.png) 


## Requirements

To run the ClinicRegistry the client needs to have the following software installed on their machine.

Node.js v14.17.6 or later
mqtt.js v4.2.8 or later

## Project setup
Installs all project dependencies specified in [package.json](./package.json).

1- Map to the client directory by entering this in the terminal 
```
cd src 
```
2- Install the dependencies >>
```
npm install
```

### Compiles and runs the component
3- Run the component
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
