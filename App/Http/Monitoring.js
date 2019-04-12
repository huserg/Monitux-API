const D = require('../../Database/DatabaseManager');

exports.switchMonitoringStatus = function (req, res) {

    D.database.MYSQL.query("CALL `switchMonitoringStatus` ('" + req.body.name + "');", function (err, result) {
        if (err) throw err;

        let output = JSON.stringify(result);

        res.end(output);

    });
};