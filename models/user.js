//models/User.js
'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var moment = require('moment');

var userSchema = mongoose.Schema({
  basic: {
    email: String,
    password: String
  }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.basic.password);
};

userSchema.methods.createToken = function(app) {
  //var expires = moment().add('days', 7).valueOf();
  var that = this;
  var token = jwt.encode({
    iss: that._id,
    //expires: expires
  }, app.get('jwtTokenSecret'));
  return token
};

module.exports = mongoose.model('User', userSchema);
