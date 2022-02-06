/**
 * File: /Users/heathdj/development/zombie-chat/backend/test/server.test.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Sunday, February 6th 2022, 5:05:12 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

var server = require('supertest');
var should = require('chai').should();
var app = require('../server');

describe('Server', function () {
  it('should pass', function (done) {
    server(app)
      .get('/')
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(200);

        done();
      });
  });
});
