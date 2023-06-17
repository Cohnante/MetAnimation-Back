const mysql = require('mysql');
require('dotenv').config()

var pool =  mysql.createPool({
    connectionLimit : 10,
    host     : 'database-metanimation.cgn3svmnigef.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'DIANAMOYA',
    database : 'MetAnimation',
    debug    :  false
});

pool.on('connection', function (connection) {
    console.log('DB Connection established');
    connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
    });
});

module.exports = pool;