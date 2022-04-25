const mysql = require ('mysql');
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '052300$',
    database: 'parcial_dos'
})

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    else {
        console.log('Db esta conectado')

    }
});

module.exports= mysqlConnection;