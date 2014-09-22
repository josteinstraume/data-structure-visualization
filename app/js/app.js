'use strict';
require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var myApp = angular.module('myApp', ['ngRoute',])

.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function(n) {
        if (!n) return;
        $http({
          method: 'POST',
          url: '/api/check/' + attrs.ensureUnique,
          data: {'field': attrs.ensureUnique}
        }).success(function(data) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data) {
          c.$setValidity('unique', false);
        });
      });
    }
  };
}])

.controller('signupController', function($scope) {
  $scope.submitted = false;
  $scope.signupForm = function() {
    if($scope.signup_form.$valid) {
      //Submit as normal
    } else {
      $scope.signup_form.submitted = true;
    }
  };
});
