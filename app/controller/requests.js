const GetProcesses = require('../get/processes');

exports.requests = {

    getProcesses: function(req, res) {
        GetProcesses.processes(req, res);
    }
}