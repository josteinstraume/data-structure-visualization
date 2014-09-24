//tutorial-controller.js


'use strict';

module.exports = function(app) {
  app.controller('tutorialController', function($scope, $location, userInputService) {

    $scope.username = userInputService.get();

    $scope.advanceToSkills = function() {
      $location.path('/tutorial-select');
      userInputService.set("username",$scope.username);
    };

    $scope.username = userInputService.get("username");

  });
};
