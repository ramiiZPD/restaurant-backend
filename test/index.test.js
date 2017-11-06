var request = require('supertest');
    app = require('../index');

describe("registration", function () {
    it("user registration", function (done) {
        request(app).post("/registration")
          .expect(200)
          .expect(/registration success/, done)
    });
});
