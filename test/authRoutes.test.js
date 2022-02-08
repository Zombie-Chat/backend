/**
 * File: /Users/heathdj/development/zombie-chat/backend/test/authRoutes.test.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Monday, February 7th 2022, 8:29:18 pm
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

describe('Register', function () {
  it('should pass', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        username: 'test',
        password: 'password',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(200);

        done();
      });
  });
});

describe('Login', function () {
  it('should pass', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        username: 'test',
        password: 'password',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(200);

        done();
      });
  });
});
