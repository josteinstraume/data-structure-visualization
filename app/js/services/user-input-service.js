'use strict';

module.exports = function(app) {
  app.factory('userInputService', function() {
    var savedData = {};
    function set(key, data) {
      savedData[key] = data;
    }
    function get(key) {
      return savedData[key];
    }

    return {
      set: set,
      get: get
    };
  });
};
