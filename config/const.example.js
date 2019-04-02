const db = require('mysql');


exports.const = {
    PORT: 8081,

    MYSQL: db.createConnection({
        host: "host to access db from",
        user: "database user",
        password: "database password",
        database: "database name"
    }),


};