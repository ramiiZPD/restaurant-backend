//registration.model is used to register a new user
//Uses following custom libraries
var database_helper = require('../helpers/database.helper');

exports.addUser = function(customerId, customerName, nic, email, mobile, callback) {
    var connection = database_helper.getDatabaseConnection();
    connection.query("INSERT INTO customer (customer_id, customer_name, nic, email, mobile) VALUES ('" + customerId + "','" + customerName + "','" + nic + "','" + email + "','" + mobile + "')", function(error, rows, fields) {
        if (error) {
            console.log('[registration.model] - addUser query failed');
            console.log(error);
            callback(false);
        } else {
            console.log('[registration.model] - addUser query ok');
            callback(true);
        }
    });
};
