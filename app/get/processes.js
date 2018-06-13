const D = require('../controller/jsonController');

exports.processes = function (req, res) {

    let json = D.json.getInfos();
    let processNames = [];
    for (let i = 0; i < json.length; i++)
        if (json[i]["monitor"] === "true")
            processNames.push(json[i]["name"]);

    let output = "";
    for (let i = 0; i < processNames.length; i++)
        output += processNames[i] + "\n";

    res.end(output);
}

