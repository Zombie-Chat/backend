/**
 * File: /Users/heathdj/development/zombie-chat/backend/controllers/auth/postRegister.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Monday, February 7th 2022, 8:45:58 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

// TDD tested in authRoutes.test.js - DJH

const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const sign = require('../../util/jwtUtil');

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if the user exists either username or email
    const userExists =
      (await User.exists({
        email: email.toLowerCase(),
      })) ||
      (await User.exists({
        username: username,
      }));

    if (userExists) {
      return res.status(409).send('User already exists');
    }

    // encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user record and save in user table
    const user = await User.create({
      username: username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create JWT token
    const TOKEN = sign(email, user._id);
    // Return User and token
    return res.status(201).json({
      userDetails: {
        email: user.email,
        username: user.username,
        token: TOKEN,
      },
    });
  } catch (err) {
    // Todo: Log error out
    console.log(err);
    return res.status(500).send('Error, Please try again');
  }
};

module.exports = postRegister;
