#!/usr/bin/env node

let dotenv = require('dotenv');
const express = require('express');
const monitux = express();
const r = require('./Routes/Requests');
const pC = require('./App/Controllers/ProcessesController');
const AuthController = require('./App/Controllers/AuthorizationController');
const cron = require('node-cron');

// if run in .deb package
dotenv.config({path:'app/.env'});
// if run in local
dotenv.config({ path: ".env" });


monitux.use(express.json());        // to support JSON-encoded bodies

monitux.use(function(req, res, next) {
    let api_key = req.get('api_key');

    if (api_key == null) {
        console.log("Undefined Api Key");
        return next(
            res.end(JSON.stringify({'error': 'true', 'response': 'Undefined API Key!'}))
        );
    }
    else if (!AuthController.authorizationController.checkApiKey(api_key)) {
        console.log("Unauthorized Api Key : " + api_key);
        return next(
            res.end(JSON.stringify({'error': 'true', 'response': 'Unauthorized API Key!'}))
        );
    }
    else {
        return next();
    }
});

// Server GET requests
monitux.get('/processes', (req, res) => r.requests.showMonitoredProcessList(req, res));
monitux.get('/processes/all', (req, res) => r.requests.showServerProcessList(req, res));
monitux.get('/processes/all/error', (req, res) => r.requests.showErrorProcessList(req, res));
monitux.get('/processes/error', (req, res) => r.requests.showErrorMonitoredProcessList(req, res));


// Server POST requests
monitux.post('/monitoring/switch', (req, res) => r.requests.switchMonitoringStatus(req, res));


monitux.listen(process.env.APP_PORT, function () {
    console.log("Monitux API is running on port " + process.env.APP_PORT)
});

cron.schedule('* * * * *', function() {
    pC.processesController.retrieveList(getCurrentTimestampForLogs());
    }, true
);

function getCurrentTimestampForLogs(){
    return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}