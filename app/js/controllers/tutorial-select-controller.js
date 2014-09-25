//tutorial-controller.js

'use strict';

module.exports = function(app) {
  app.controller('tutorialSelectController', function($scope, $location, userInputService) {
    $scope.d3 = require('d3');
    $scope.username = userInputService.get();

    $scope.advanceToTutorials = function() {
      $location.path('/tutorial-select');
      userInputService.set("username",$scope.username);
    };


    $scope.username = userInputService.get("username");

  });
};
