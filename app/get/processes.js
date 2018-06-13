const C = require('../../config/const');

exports.showServerProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });
}


exports.showMonitoredProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `monitoring` = 1;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });
},

exports.showErrorProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `status` != 'active';", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });

},

exports.showErrorMonitoredProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `status` != 'active' AND `monitoring` = 1;", function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
    });

}
