const mysql = require('mysql')
require('dotenv/config');


conection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

module.exports = conection