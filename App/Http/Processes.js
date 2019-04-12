const D = require('../../Database/DatabaseManager');

exports.showServerProcessList = function (req, res) {

    D.database.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify({'response': result}));
    });
};


exports.showMonitoredProcessList = function (req, res) {

    D.database.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `monitoring` = 1;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify({'response': result}));
    });
};

exports.showErrorProcessList = function (req, res) {

    D.database.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `status` != 'active';", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify({'response': result}));
    });
};

exports.showErrorMonitoredProcessList = function (req, res) {

    D.database.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `status` != 'active' AND `monitoring` = 1;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify({'response': result}));
    });

};
