// NodeJS Libraries
var express = require('express');
    bodyParser = require('body-parser');
    cors = require('cors');
    nodemailer = require('nodemailer');
    Nexmo = require('nexmo');

// Uses following custom libraries
var config = require('./config');

// Initializing ExpressJS
var app = express();

// Nexmo SMS library integration
var nexmo = new Nexmo({
    apiKey: 'e5da879f',
    apiSecret: '3bbf797519acf919'
});

// Central Router
app.use(cors());
var controller_index = require('./controllers/index.js');

// Central router
app.use(bodyParser.json());
app.use('/api', controller_index);

// Server Startup
app.listen(config.server.port, function(error) {
    if (error) {
        console.log("Error");
    }
    console.log("API is Running on http:://localhost/8080");
});

module.exports = app;
