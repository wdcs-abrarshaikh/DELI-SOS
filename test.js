var supertest = require('supertest');  
var chai = require('chai');   
var app = require('./main');

global.expect = chai.expect;  
global.request = supertest(app);  

describe('GET /getNotificationList', function() {
    it('returns a list of notification', function(done) {
        request.get('/user/getNotificationList/5bb200c3aae73727fc6f6c49')
            .set('authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjIwMGMzYWFlNzM3MjdmYzZmNmM0OSIsImVtYWlsIjoia2F2eWEucGF0ZWxAY29kZXplcm9zLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNTQ1MjA1NDQyLCJleHAiOjE1NDUyOTE4NDJ9.YLMK1rsMOxr75hd8OTMmuEiHyzgt76KIL1vkXiJIVh4')
            .expect(200)
            .end(function(err, res) {
                expect(res.body['data']).not.eql([])
                done(err);
            });
    });
});