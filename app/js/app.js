'use strict';

require('angular/angular');
require('angular-route');
require('angular-base64');
require('angular-cookies');

var tutorialApp = angular.module('tutorialApp', ['ngRoute', 'ngCookies', 'base64']);

require('./controllers/users-controller')(tutorialApp);
require('./controllers/home-controller')(tutorialApp);

tutorialApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'home.html',
    controller: 'homeController'
  })
  .when('/signin', {
    templateUrl: 'users.html',
    controller: 'usersController'
  })
  .otherwise({
    redirectTo:'/signin'
  });
}]);
