'use strict';

module.exports = function(app) {
  app.controller('notesController', function($scope, notesServer) {
    $scope.getAllNotes = function() {
      notesServer.index()
        .success(function(data) {
           $scope.notes = data;
        });
    };

    $scope.getAllNotes();

    $scope.cancelEdit = function(note, noteform) {
      note.editing = false;
      if(noteform.$dirty) {
        $scope.getAllNotes();
      }
    };

    $scope.saveNewNote = function() {
      notesServer.saveNewNote($scope.newNote)
        .success(function(data) {
          $scope.notes.push(data);
        });
    };

    $scope.editNote = function(note) {
      note.editing = true;
    };

    $scope.saveNote = function(note) {
      notesServer.saveOldNote(note)
        .success(function() {
          $scope.getAllNotes();
        });
    };

    $scope.deleteNote = function(note) {
      notesServer.deleteNote(note)
        .success(function() {
          $scope.getAllNotes();
        });
    };

    $scope.deleteAll = function() {
      $scope.notes.forEach(function(note) {$scope.deleteNote(note);});
    };
  });
};
