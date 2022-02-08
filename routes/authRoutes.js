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

//Register a new user

router.post('/register', (req, res) => {
  res.send('register route');
});

// Login to the backend
router.post('/login', (req, res) => {
  res.send('login route');
});

module.exports = router;
