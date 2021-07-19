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

// Using object destrcturing concept of object
const printJsondata = ({observation_time,temperature,weather_descriptions,is_day,humidity},locationName)=>{
    console.log(chalk.yellow(`         --- Location : ${locationName} ---        `))
    console.log(chalk.yellow('   Observation time       - >   ',observation_time));
    console.log(chalk.yellow('   Temperature            - >   ',temperature));
    console.log(chalk.yellow('   Weather Descriptions   - >   ',weather_descriptions));
    console.log(chalk.yellow('   Day                    - >   ',is_day));
    console.log(chalk.yellow('   Humidity               - >   ',humidity));
}

module.exports = {
    geowheatherProject: geoWheatherApi
}

