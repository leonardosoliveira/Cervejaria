const mysql = require('mysql')
require('dotenv/config');


function conection() {

    conextion = mysql.createConnection({
        host: process.env.HOST,
        port: process.env.PORT_DB,
        user: process.env.USER_DB,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
    return conextion
}

module.exports = conection