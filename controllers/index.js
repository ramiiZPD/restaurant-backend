//This is the main controller which binds every other sub controllers
var express = require('express'),
    router = express.Router();
router.use('/reservations', require('./reservation.controller'));
router.use('/registrations', require('./registration.controller'));
module.exports = router;
