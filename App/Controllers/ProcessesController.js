const exec = require('child_process').exec;
const D = require('../../Database/DatabaseManager');

exports.processesController = {

    retrieveList: function(timestamp) {
        exec('systemctl list-units --type=service --all', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }

            let output = stdout.split("\n");
            output = output.slice(1,output.length - 8);


            for (let i = 0; i < output.length; i++)
                output[i] = output[i].split(/\.service/);

            for (let i = 0; i < output.length; i++)
                for (let j = 0; j < output[i].length; j++)
                    output[i][j] = output[i][j].split(/[ ]{1,}/);

            for (let i = 0; i < output.length; i++) {
                D.database.MYSQL.query("CALL `save_services`('"+output[i][0][1]+"', '"+output[i][1][1]+"', '"+output[i][1][2]+"');", function (err, result) {
                    if (err) throw err;
                });
            }

            console.log(timestamp + ": Process list retrieved!");
        });
    }
};