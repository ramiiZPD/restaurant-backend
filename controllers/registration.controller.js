var express = require('express'),
    router = express.Router(),
    Registration = require('../models/registration.model');

// User registration
router.post('/', function(req, res) {
    var customerId = req.body.customer_id;
    var customerName = req.body.customer_name;
    var nic = req.body.nic;
    var email = req.body.email;
    var mobile = req.body.mobile;
    console.log('[POST /registrations]');
    Registration.addUser(customerId, customerName, nic, email, mobile, function(status, response) {
        if (status) {
            res.status(201).json(response);
        } else {
            res.status(500).end();
        }
    });
});

module.exports = router;
