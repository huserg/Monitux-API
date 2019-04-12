#!/usr/bin/env node
require('dotenv').config();
const chalk = require('chalk');
const updateDotenv = require('update-dotenv');

const args = process.argv;



// usage represents the help guide
const usage = function() {
    const usageText = `
  monitux-api-cli helps you manage your monitux-api.
  usage:
    monitux-api-cli <command>
    commands can be:
    help                  used to display this help
    api-key:generate      used to generate a new Api Key
    api-key:display       used to print Api Key
  `;

    console.log(usageText);
};

// used to log errors to the console in red color
function errorLog(error) {
    const eLog = chalk.red(error);
    console.log(eLog);
}


// we make sure the length of the arguments is exactly three
if (args.length > 3) {
    errorLog('only one argument can be accepted');
    usage();
    return;
}


function generateKey() {
    let newKey = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(26).substring(2);

    updateDotenv({
        API_KEY: newKey
    }).then(() => console.log("Your new Api Key is : '" + newKey + "'"));
}


function displayKey() {
    console.log("Your Api Key is : '" + process.env.API_KEY + "'");
}


switch(args[2]) {
    case 'help':
        usage();
        break;
    case 'api-key:generate':
        generateKey();
        break;
    case 'api-key:display':
        displayKey();
        break;
    default:
        errorLog('invalid command passed');
        usage();
        break;
}

