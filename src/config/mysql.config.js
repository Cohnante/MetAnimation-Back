const mysql = require('mysql');
require('dotenv').config()

const conexion = mysql.createConnection({
    host:'metanimationbd.mysql.database.azure.com',
    user:'MetAnimation',
    password:'152403Gian?',
    database:'MetAnimation',
    ssl: true
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error' + err)
    }
    else{
        console.log('La base de datos mysql se conecto')
    }
});

module.exports=conexion;