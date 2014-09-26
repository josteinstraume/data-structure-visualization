'use strict'

require('../../app/js/app.js');
require('angular-mocks');

describe('Unit Testing', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('tutorialApp'));
  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should have a user controller to be defined', function() {
    var  usersController= $controllerConstructor('usersController', {$scope: scope});
    expect(typeof usersController).toBe('object');
  });

  it('should have tutorial-select-controller defined', function() {
    var tutorialSelectController = $controllerConstructor('tutorialSelectController', {$scope: scope});
    expect(typeof tutorialSelectController).toBe('object');
  });

  it('should have home controller defined', function() {
    var homeController = $controllerConstructor('homeController', {$scope: scope});
    expect(typeof homeController).toBe('object');
  });

  it('should have d3 controller defined', function() {
    var dthreeBinaryController = $controllerConstructor('dthreeBinaryController', {$scope: scope});
    expect(typeof dthreeBinaryController).toBe('object');
  });

  it('should have a data controller', function() {
    var dataController = $controllerConstructor('dataController', {$scope: scope});
    expect(typeof dataController).toBe('object');
  });
});
