'use strict';

module.exports = function(app) {
  app.directive('binaryTree', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/dthree-template.html',
      controller: 'dthreeBinaryController'
    };
  });
};
