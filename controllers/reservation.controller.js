var express = require('express'),
    router = express.Router(),
    Reservation = require('../models/reservation.model');

// Make a reservation
router.post('/', function(req, res) {
    var reservationId = req.body.reservation_id;
    var userId = req.body.user_id;
    var mobile = req.body.mobile;
    var noOfGuests = req.body.no_of_guests;
    var arrivalTime = req.body.arrival_time;
    var email = req.body.email;
    console.log('[POST /reservations]');
    Reservation.makeReservation(reservationId, userId, mobile, noOfGuests, arrivalTime, email, function(status, response) {
        if (status) {
            res.status(201).json(response);
        } else {
            res.status(500).end();
        }
    });
});

module.exports = router;
