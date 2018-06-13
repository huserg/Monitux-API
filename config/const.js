const db = require('mysql');


exports.const = {
    PORT: 8081,

    MYSQL: db.createConnection({
        host: "localhost",
        user: "monitux",
        password: "UnluckyTuxMonitwd",
        database: "monitux"
    }),


};