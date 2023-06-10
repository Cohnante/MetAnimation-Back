const mysql = require('mysql');
require('dotenv').config()

const conexion = mysql.createConnection({
    host:'database-metanimation.cgn3svmnigef.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'DIANAMOYA',
    database:'MetAnimation'
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