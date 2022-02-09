/**
 * File: /Users/heathdj/development/zombie-chat/backend/controllers/auth/authController.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Monday, February 7th 2022, 8:45:50 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

// Simple File not TDD Unit test needed - DJH

const postLogin = require('./postLogin');
const postRegister = require('./postRegister');

exports.controllers = {
  postLogin,
  postRegister,
};
