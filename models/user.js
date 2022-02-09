/**
 * File: /Users/heathdj/development/zombie-chat/backend/models/user.js
 * Project: /Users/heathdj/development/zombie-chat/backend
 * Created Date: Tuesday, February 8th 2022, 9:46:31 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Zombie Chat
 * ------------------------------------
 * Javascript will save your soul!
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model('user', userSchema);
