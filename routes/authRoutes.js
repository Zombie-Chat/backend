/**
 * File: /Users/heathdj/development/zombie-chat/backend/routes/authRoutes.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Monday, February 7th 2022, 8:27:07 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

// Module Imports
const express = require('express');
const router = express.Router();

const joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

// app module imports
const authController = require('../controllers/auth/authController');

// Schema
const registerSchema = joi.object({
  username: joi.string().min(3).max(12).required(),
  password: joi.string().min(8).max(255).required(),
  email: joi.string().email().required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(255).required(),
});

//Register a new user

router.post(
  '/register',
  validator.body(registerSchema),
  authController.controllers.postRegister
);

// Login to the backend
router.post(
  '/login',
  validator.body(loginSchema),
  authController.controllers.postLogin
);

module.exports = router;
