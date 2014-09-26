require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var notesApp = angular.module('notesApp', ['ngRoute', 'base64', 'ngCookies']);

require('./controllers/home-controller')(notesApp);
require('./controllers/users-controller')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes.html',
      controller: 'NotesController'
    })
    .when('/signin', {
      templateUrl: 'views/users.html',
      controller: 'usersController'
    })
    .otherwise({
      redirectTo: '/signin'
    });
}]);
