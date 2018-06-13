let express = require('express');
let app = express();
let D = require('./app/controller/jsonController');
let C = require('./config/const');
let r = require('./app/controller/requests')

app.get('/processes', (req, res) => r.requests.getProcesses(req, res))

let server = app.listen(C.const.PORT, function () {
    let port = server.address().port;
    console.log("Monitux API is running on port " + port)
})