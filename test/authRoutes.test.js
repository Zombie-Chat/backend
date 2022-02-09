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

// Commented out Test cases need mocks setup for the DB.  DJH - 2/8/22

var server = require('supertest');
var should = require('chai').should();
const expect = require('chai').expect;
var app = require('../server');

// describe('Register', function () {
//   it('should pass', function (done) {
//     server(app)
//       .post('/api/auth/register')
//       .send({
//         email: 'test@test.com',
//         username: 'test',
//         password: 'password',
//       })
//       .end(function (err, res) {
//         if (err) done(err);
//         res.status.should.equal(201);

//         done();
//       });
//   });
// });

// describe('Login', function () {
//   it('should pass', function (done) {
//     server(app)
//       .post('/api/auth/login')
//       .send({
//         email: 'test@test.com',
//         password: 'password',
//       })
//       .end(function (err, res) {
//         if (err) done(err);
//         res.status.should.equal(201);

//         done();
//       });
//   });
// });

describe('Register', function () {
  it('should fail username too short', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        username: 'ts',
        password: 'password',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(400);
        expect(res.text).to.contain('3 character');
        done();
      });
  });
});

describe('Register', function () {
  it('should fail not an email', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        email: 'testtest.com',
        username: 'test',
        password: 'password',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(400);
        expect(res.text).to.contain('email');
        done();
      });
  });
});

describe('Register', function () {
  it('should fail password to short', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        username: 'test',
        password: 'pas',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(400);
        expect(res.text).to.contain('8 character');
        done();
      });
  });
});

describe('Login', function () {
  it('should fail no password', function (done) {
    server(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: '',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(400);
        expect(res.text).to.contain('empty');
        done();
      });
  });
});

// describe('Register', function () {
//   it('should fail duplicate user', function (done) {
//     server(app)
//       .post('/api/auth/register')
//       .send({
//         email: 'test@test.com',
//         username: 'test',
//         password: 'password',
//       })
//       .end(function (err, res) {
//         if (err) done(err);
//         res.status.should.equal(400);
//         expect(res.text).to.contain('Error');
//         done();
//       });
//   });
// });

describe('Register', function () {
  it('should fail username too long', function (done) {
    server(app)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        username: 'test12345678901234567890',
        password: 'password',
      })
      .end(function (err, res) {
        if (err) done(err);
        res.status.should.equal(400);
        expect(res.text).to.contain('12 character');
        done();
      });
  });
});
