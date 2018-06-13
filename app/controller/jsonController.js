const jsonfile = require('jsonfile');

let processes = "processes";

exports.json = {
    JSON_FILE: './config/config.json',
    JSON: {},


    __read: function(){
        this.JSON = jsonfile.readFileSync(this.JSON_FILE);
    },

    __write: function () {
        jsonfile.writeFile(this.JSON_FILE, this.JSON, {spaces: 2}, function (err) {
            if (err != null) console.error("Error: " + err)
        });
    },

    getInfos: function () {
        this.__read();
        if(!this.JSON.hasOwnProperty(processes)){
            this.setInfos(processes,
                [
                    {"pid" : "123", "name" : "process 1", "monitor" : "true"},
                    {"pid" : "234", "name" : "process 2", "monitor" : "false"},
                    {"pid" : "345", "name" : "process 3", "monitor" : "true"},
                    {"pid" : "456", "name" : "process 4", "monitor" : "false"}
                ]
            );
        }
        return this.JSON[processes];
    },

    setInfos: function (key, JSON) {
        this.JSON[key] = JSON;
        this.__write();
    },



};