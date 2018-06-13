const C = require('../../config/const');

exports.showServerProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services;", function (err, result) {
        if (err) throw err;
        let output = JSON.stringify(result);

        res.end(output);

    });
}


exports.showMonitoredProcessList = function (req, res) {

    C.const.MYSQL.query("SELECT `name`, `load`, `status`, `monitoring` FROM services WHERE `monitoring` = 1;", function (err, result) {
        if (err) throw err;
        let output = JSON.stringify(result);

        res.end(output);

    });
}
