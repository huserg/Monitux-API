const db = require('mysql');


exports.database = {
    MYSQL: db.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_SCHEMA
    }),


};