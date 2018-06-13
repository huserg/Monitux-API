let express = require('express');
let app = express();
let C = require('./config/const');
let r = require('./app/controller/requests');
let pC = require('./app/controller/processController');

app.use(express.json());        // to support JSON-encoded bodies
app.use(express.urlencoded());  // to support URL-encoded bodies

pC.processesController.retrieveList();

app.get('/processes', (req, res) => r.requests.showMonitoredProcessList(req, res))
app.get('/processes/all', (req, res) => r.requests.showServerProcessList(req, res))
app.post('/monitoring/switch', (req, res) => r.requests.switchMonitoringStatus(req, res))

let server = app.listen(C.const.PORT, function () {
    let port = server.address().port;
    console.log("Monitux API is running on port " + port)
})
