const GetProcesses = require('../App/Http/Processes');
const PostMonitoring = require('../App/Http/Monitoring');


exports.requests = {

    showMonitoredProcessList: function(req, res) {
        GetProcesses.showMonitoredProcessList(req, res);
    },

    showServerProcessList: function (req, res) {
        GetProcesses.showServerProcessList(req, res);
    },

    showErrorProcessList: function (req, res) {
        GetProcesses.showErrorProcessList(req, res);
    },

    showErrorMonitoredProcessList: function (req, res) {
        GetProcesses.showErrorMonitoredProcessList(req, res);
    },

    switchMonitoringStatus: function (req, res) {
        PostMonitoring.switchMonitoringStatus(req, res);
    }
};
