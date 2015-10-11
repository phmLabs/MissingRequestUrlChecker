var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('watch_url_config', function() {

    describe('GET /watchurlconfig', function() {

      it('should return a list of url configs', function(done) {

        request(server)
          .get('/watchurlconfig')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
      });

      it('should accept a id parameter', function(done) {

        request(server)
          .get('/watchurlconfig')
          .param({ id: '1234'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
      });

    });

  });

});
