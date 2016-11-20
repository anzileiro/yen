'use strict'

const SupertTest = require("supertest")
    , should = require("should")

let Server = SupertTest.agent(`http://localhost:${process.env.NODE_HTTP_PORT}`);

describe('testing api routes', () => {

    it("should return http 200", (_done) => {
        Server
            .get('/get')
            .expect('Content-type', /json/)
            .expect(200)
            .end((_error, _response) => {
                _response.status.should.equal(200)
                _done()
            })
    })

})