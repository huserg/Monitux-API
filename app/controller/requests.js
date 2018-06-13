const GetProcesses = require('../get/processes');
const PostMonitoring = require('../post/monitoring');

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
}