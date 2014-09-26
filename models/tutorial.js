'use strict';

var mongoose = require('mongoose');

var tutorialSchema = mongoose.Schema({
  tutorialBody: String
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
