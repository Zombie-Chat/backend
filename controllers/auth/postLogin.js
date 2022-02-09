/**
 * File: /Users/heathdj/development/zombie-chat/backend/controllers/auth/postLogin.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Monday, February 7th 2022, 8:46:06 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

// TDD done in authRoutes.test.js - DJH

const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const sign = require('../../util/jwtUtil');

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    // If we find a user check the password
    if (user && (await bcrypt.compare(password, user.password))) {
      // Send New token back
      const TOKEN = sign(email, user._id);

      return res.status(201).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token: TOKEN,
        },
      });
    }
    // User not found or password does not match
    return res.status(400).send('invalid data');
  } catch (err) {
    // Todo: Log error out
    console.log(err);
    return res.status(500).send('Error, Please try again');
  }
};

module.exports = postLogin;
