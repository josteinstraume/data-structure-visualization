'use strict'

module.exports = function(app) {
  app.controller('userInfoController', function($scope, datavizServer) {
    //not sure how strictly necessary this particular function is.
    $scope.getAllUsers = function() {
      datavizServer.index()
        .success(function(data) {
          $scope.users = data;
        });
    };

    $scope.getAllUsers();

    $scope.createNewUser = function() {
      $http.post('api/v.0.0.1/users', $scope.newUser)
        .success(function(data) {
          $scope.users.push(data);
          $scope.newUser = '';
        })
        .error(function(data, status) {
          console.log(data);
        });
    };

  });
};
