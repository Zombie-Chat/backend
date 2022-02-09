/**
 * File: /Users/heathdj/development/zombie-chat/backend/middleware/auth.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Tuesday, February 8th 2022, 10:58:57 pm
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

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token is missing');
  }
  try {
    token = token.replace(/^Bearer\s+/, '');
    const decoded = JWT.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    // Log
    return res.status(401).send('Invalid Token');
  }

  return next();
};

module.exports = verifyToken;
