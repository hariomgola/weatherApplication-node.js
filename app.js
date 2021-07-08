// Entry point of the application
const chalk = require("chalk");
const main = require('./src/main');


console.log(chalk.magenta(process.argv));

let location = process.argv[2];
let data = main.geowheatherProject(location);