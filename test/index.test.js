var request = require('supertest');
    express = require('express');
    should = require('should');
    app = require('../index');

const agent = request.agent(app);

describe('registration routes', function() {
    const reg = {customer_id : '20', customer_name : 'Ramitha', nic : '951740551V', email : 'ramithakalana@gmail.com', mobile : '0779915744'};
    it('should add a new user', function()  {
        agent
        .post('/api/registrations')
        .send(reg)
        .expect(201)
        .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.json;
            done();
        });
    });
});

describe('reservation routes', function() {
    const reg = {reservation_id : '25', user_id : '421', mobile : '+94779915744', no_of_guests : '12', arrival_time : '16', email : 'ramithakalana@gmail.com'};
    it('should add a reservation', function()  {
        agent
            .post('/api/reservations')
            .send(reg)
            .expect(201)
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});