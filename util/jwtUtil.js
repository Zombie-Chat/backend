/**
 * File: /Users/heathdj/development/zombie-chat/backend/util/jwtUtil.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Tuesday, February 8th 2022, 10:52:55 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

const JWT = require('jsonwebtoken');

// Set Expire to env var.
const sign = (email, userId) => {
  return JWT.sign(
    {
      userId,
      email,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: '24h',
    }
  );
};

module.exports = sign;
