'use strict';

module.exports = function(app) {
  app.filter('sentencify', function() {
    return function(input) {
      if(!input) {
        return '';
      }
      var output = input[0].toUpperCase() + input.slice(1);
      var last = input[input.length - 1];
      if(last !== '.' && last !== '?' && last !== '!') {
        output += '.';
      }
      return output;
    };
  });
};
