'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('notesServer service', function() {
  beforeEach(angular.mock.module('notesApp'));

  var ns;
  var $httpBackend;
  var testNote = {noteBody: 'test note', _id: '1'};
  beforeEach(angular.mock.inject(function(notesServer, _$httpBackend_) {
    ns = notesServer;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should make a get request', function() {
    $httpBackend.expectGET('/api/v_0_0_1/notes').respond(200, [{}]);
    ns.index();

    $httpBackend.flush();
  });

  it('should make a post request', function() {
    $httpBackend.expectPOST('/api/v_0_0_1/notes').respond(200, testNote);
    ns.saveNewNote(testNote);

    $httpBackend.flush();
  });

  it('should make a put request', function() {
    $httpBackend.expectPUT('/api/v_0_0_1/notes/1').respond(202, testNote);
    ns.saveOldNote(testNote);

    $httpBackend.flush();
  });

  it('should be able to make a delete request', function() {
    $httpBackend.expectDELETE('/api/v_0_0_1/notes/1').respond(200);
    ns.deleteNote(testNote);

    $httpBackend.flush();
  });
});
