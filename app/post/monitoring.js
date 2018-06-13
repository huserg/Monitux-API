const C = require('../../config/const');

exports.switchMonitoringStatus = function (req, res) {

    C.const.MYSQL.query("CALL `switchMonitoringStatus` ('" + req.body.name + "');", function (err, result) {
        if (err) throw err;

        let output = JSON.stringify(result);

        res.end(output);

    });
}