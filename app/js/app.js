'use strict';
//comment for changes
require('angular/angular');
require('angular-route');

/* jshint ignore:start */
var notesApp = angular.module('notesApp', ['ngRoute']);
/* jshint ignore:end */

//controllers
require('./notes/controllers/notes-controller')(notesApp);

//filters
require('./filters/sentence-filter')(notesApp);

//services
require('./notes/services/notes-server')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes/notes.html',
      controller: 'notesController'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
