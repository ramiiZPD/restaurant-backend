var mysql = require('mysql');
var config = require('../config');

// Database connection
var connection = mysql.createConnection({
    host: config.database.hostname,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name
});

connection.connect(function (error) {
    if(error){
        console.log('[database.helper] - Not connected ' + error);
    }else {
        console.log('[database.helper] - Connected');
    }
})

exports.getDatabaseConnection = function(){
    return connection;
}