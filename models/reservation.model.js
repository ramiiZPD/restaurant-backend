//reservation.model is used to make a reservation
//Uses following custom libraries
var database_helper = require('../helpers/database.helper');

exports.makeReservation = function(reservationId, userId, mobile, noOfGuests, arrivalTime, email, callback) {
    var connection = database_helper.getDatabaseConnection();
    connection.query("INSERT INTO reservation (reservation_id, user_id, mobile, no_of_guests, arrival_time, email) VALUES ('" + reservationId + "','" + userId + "','" + mobile + "','" + noOfGuests + "','" + arrivalTime + "','" + email + "')", function(error, result) {
        if (error) {
            console.log('[reservation.model] - makeReservation query failed');
            console.log(error);
            callback(false);
        } else {
            console.log('[reservation.model] - makeReservation query ok');

            // SMS API integration
            nexmo.message.sendSms(mobile, mobile, 'Reservation Made', function(error, responseData) {
                if (error) {
                    console.log("SMS API integrtion error");
                } else {
                    console.log("SMS successfully sent");
                }
            });

            // Email sending
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'designathonux@gmail.com',
                    pass: '*********'
                }
            });

            var mailOptions = {
                from: 'designathonux@gmail.com',
                to: email,
                subject: 'Reservation',
                text: 'Your reservation id is ' + reservationId + ' come on time at ' + arrivalTime
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log("Nodemailer error");
                } else {
                    console.log("Email successfully sent");
                }
            });
            callback(true);
        }
    });
};
