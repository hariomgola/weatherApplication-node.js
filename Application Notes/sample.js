/**
 * Code to call wheather api
 */
const weatherStack = apidata.wheatherapi;
const url = weatherStack.demo;
// json: true will pass key value pair to parse https request in object format
request({ url: url, json: true }, (error, response) => {
    // function will run when we get the response
    if (error) {
        console.log(chalk.red('  - > Unable to Connect to Weather Api < -  '));
    }
    else if (response.body.error) {
        console.log(chalk.yellow('Unable to find Weather data. Please Check Inputs.'));
    }
    else {
        // console.log(response);
        // const data = JSON.parse(response.body);
        // console.log(data.current)
        console.log(response.body.current);
    }
})

/**
 * Using geo-coding api
 */
const geoLocation = apidata.mapboxapi;
const geoUrl = geoLocation.demo;
request({ url: geoUrl, json: true, limit: 1 }, (error, response) => {
    // Function will return when we get the response

    if (error) {
        console.log(chalk.red('  - > Unable to Connect to geo location Api < -  '));
    }
    else if (response.body.features.length == 0) {
        console.log(chalk.yellow('Unable to find location. Please Check Inputs.'));
    }
    else {
        console.log(response.body.features);
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];

        console.log(chalk.magenta(`latitude  ---------->  ${latitude}`))
        console.log(chalk.magenta(`longitude  ---------->  ${longitude}`))
    }
})



const _geocode = (address, callback) => {
    setTimeout(() => {
        //Define set time out function
        const data = {
            latitude: 100,
            longitude: 2000
        }
        return data;
    })
}

/**
 * Returns undefine beacuse returns only return the value function to setTimeOut not the geocode.
 * That's why its returning undefine we have to use the below callback function to get the value.
 */
console.log(_geocode('India'))


const geocode = (address, callback) => {
    setTimeout(() => {
        //Define set time out function
        const data = {
            latitude: 100,
            longitude: 2000
        }
        callback(data);
    })
}

geocode('India', (data) => {
    // this in the call back function passing it as a function
    console.log(data)
})

// check the difference b/w both function one is returning undefine while other is returning the expected value
let callback = (/*parameter to pass it may be 2/3 depends on consition or usablity*/) => {
    // call back function
}


// Destructure object concept
const data = {
    name:'Hari',
    age:21,
    designation : 'Software Engineer',
    language: 'node.js'
}

const {name,age,salary} = data;

console.log(name);
console.log(age);
console.log(salary); // print undefined


const {name:FullName,age,salary = 1} = data;
console.log(FullName)


// Destructure object concept with function
const tramsaction = (type,{name,age})=>{
    console.log(name,age)
}

// here calling function throught data and desturcture in function itself
tramsaction('order',data)


// Making https request without library
const http = require('http');
const url = dumyUrl = 'http://api.weatherstack.com/current?access_key=0a64e2610865af7f3ce1cd49d4723220&query=40.714,-74.006&unit=f'

const request = http.request(url,(response)=>{
    let data = '';
    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    });

    response.on('end',()=>{
        console.log(JSON.parse(data))
    })
})

request.on('error',(error)=>{
    console.log("An error->",error);
})

request.end();
