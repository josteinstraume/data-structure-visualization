'use strict'

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String
});

module.exports = mongoose.model('UserInfo', userSchema);
