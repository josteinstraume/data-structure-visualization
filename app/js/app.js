'use strict';

require('angular/angular');
require('angular-route');
require('angular-base64');
require('angular-cookies');

var tutorialApp = angular.module('tutorialApp', ['ngRoute', 'ngCookies', 'base64']);

//controlers
require('./controllers/admin-controller')(tutorialApp);
require('./controllers/tutorial-controller')(tutorialApp);
require('./controllers/tutorial-select-controller')(tutorialApp);
require('./controllers/users-controller')(tutorialApp);
require('./controllers/home-controller')(tutorialApp);

//services
require('./services/tutorial-server')(tutorialApp);
require('./services/user-input-service')(tutorialApp);

//directives
//routes
require('./routes/tutorial-routes')(tutorialApp);

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
