'use strict';

var User = require('../models/user');
var jwt = require('jwt-simple');

module.exports = function(app) {
  var jwtauth = {
    auth: function(req, res, next) {
      var token = (req.body && req.body.jwt_token) || req.headers.jwt;

      var decoded;
      try {
        decoded = jwt.decode(token, app.get('jwtTokenSecret'));
        console.log('decoded');
      } catch(err) {
        console.log('decode error');
        return res.status(401).json({'msg': 'access denied'});
      }

      User.findOne({'_id': decoded.iss}, function(err, user) {
        if(err) return res.status(500).json(err);

        if(!user) return res.status(401).json({'msg': 'access denied'});
        console.log('user found');

        req.user = user;
        next();
      });
    }
  };

  return jwtauth;
};
