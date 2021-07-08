// importing request package
const chalk = require('chalk');

// importing files
const geocodeApi = require('../utils/geocode');
const wheatherApi = require('../utils/wheather');


const geoWheatherApi = (locationName) => {
    console.log(chalk.yellow('Accessing location from command line - >  ', process.argv[2]));
    geocodeApi.geocode(locationName, (error, geoData) => {
        if (error)
            return console.log(chalk.red(`  Error - > ${error} `));


        wheatherApi.wheatherapi(geoData, (error, wheatherData) => {
            if (error)
                return console.log(chalk.red(`  Error - > ${error} `));


            // console.log(chalk.green(' Success Data - > ', JSON.stringify(wheatherData)))
            printJsondata(wheatherData,locationName);
        })
    })
}

const printJsondata = (data,locationName)=>{
    console.log(chalk.yellow(`         --- Location : ${locationName} ---        `))
    console.log(chalk.yellow('   Observation time       - >   ',data.observation_time));
    console.log(chalk.yellow('   Temperature            - >   ',data.temperature));
    console.log(chalk.yellow('   Weather Descriptions   - >   ',data.weather_descriptions));
    console.log(chalk.yellow('   Day                    - >   ',data.is_day));
    console.log(chalk.yellow('   Humidity               - >   ',data.humidity));
}

module.exports = {
    geowheatherProject: geoWheatherApi
}

