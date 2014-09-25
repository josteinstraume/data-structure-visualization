//tutorial-controller.js

'use strict';

module.exports = function(app) {
  app.controller('tutorialSelectController', function($scope, $location, userInputService) {
    $scope.d3 = require('d3');
    $scope.user.email = userInputService.get();

    $scope.advanceToTutorials = function() {
      $location.path('/tutorial-select');
      userInputService.set("user.email",$scope.user.email);
    };


    $scope.user.email = userInputService.get("user.email");

  });
};
