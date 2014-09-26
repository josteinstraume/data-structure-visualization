'use strict';

module.exports = function(app) {
  app.directive('eventBarGraph', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/dthree-template.html',
      controller: 'dthreeBinaryController'
    };
  });
};
