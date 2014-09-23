'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('NotesController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('notesApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should able to create a new controller', function() {
    var notesController = $controllerConstructor('notesController', {$scope: scope });
    expect(typeof notesController).toBe('object');
  });

  describe('rest requests', function() {
    var ctrl;
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/v_0_0_1/notes').respond(200, [{'noteBody': 'test note'}]);
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request', function() {
      ctrl = $controllerConstructor('notesController', {$scope: scope});

      $httpBackend.flush();

      expect(Array.isArray(scope.notes)).toBeTruthy();
      expect(scope.notes[0].noteBody).toEqual('test note');
    });

    it('should be able to create a new note', function() {
      $httpBackend.expectPOST('/api/v_0_0_1/notes').respond(200, {'noteBody': 'test note'});
      ctrl = $controllerConstructor('notesController', {$scope: scope});
      scope.newNote = {'noteBody': 'test note'};
      scope.saveNewNote();

      $httpBackend.flush();
    });

    it('should be able edit a note', function() {
      $httpBackend.expectPUT('/api/v_0_0_1/notes/1').respond(202, {});
      $httpBackend.expectGET('/api/v_0_0_1/notes').respond(200, [{}]);
      ctrl = $controllerConstructor('notesController', {$scope: scope});
      scope.saveNote({_id: '1'});

      $httpBackend.flush();
    });

    it('should be able to delete a note', function() {
      $httpBackend.expectDELETE('/api/v_0_0_1/notes/1').respond(200, {});
      $httpBackend.expectGET('/api/v_0_0_1/notes').respond(200, [{}]);
      ctrl = $controllerConstructor('notesController', {$scope: scope});
      scope.deleteNote({_id: '1'});

      $httpBackend.flush();
    });
  });
});
