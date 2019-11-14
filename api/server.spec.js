const superTest = require('supertest');
const server = require('./server');

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('server', function() {
    describe('GET/', function() {
        it('should return 200', function() {
            // run server
            //make get req
            return superTest(server).get('/').then(res => {
                // see that the http code of res is 200
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
        it('Body should return api: up', function() {
            return superTest(server).get('/').then(res => {
                expect(res.body).toEqual({ api: "up"});
            })
        })
        // slightly different test
        // it('Body should return api: up', function() {
        //     return superTest(server).get('/').then(res => {
        //         expect(res.body).toEqual({ api: "up"});
        //     })
        // })
    })
}) 

// the endpoint returns the correct http status code based on input 
// the endpoint returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input