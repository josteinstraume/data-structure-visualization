'use strict';

module.exports = function(app) {
  app.factory('notesServer', function($http) {
    var parseNote = function(note) {
      return {noteBody: note.noteBody};
    };

    var note = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v_0_0_1/notes'
        })
          .error(function(data, status) {
            console.log('error!');
            console.log(data);
            console.log(status);
          });

        return promise;
      },

      saveNewNote: function(note) {
        var promise = $http.post('/api/v_0_0_1/notes', parseNote(note))
                .error(function(data, status) {
                  console.log('error!');
                  console.log(data);
                  console.log(status);
                });

        return promise;
      },

      saveOldNote: function(note) {
        var promise = $http.put('/api/v_0_0_1/notes/' + note._id, parseNote(note))
                .error(function(data, status) {
                  console.log('error!');
                  console.log(data);
                  console.log(status);
                });

        return promise;
      },

      deleteNote: function(note) {
        var promise = $http.delete('/api/v_0_0_1/notes/' + note._id)
                        .error(function(data, status) {
                          console.log('error!');
                          console.log(data);
                          console.log(status);
                        });

        return promise;
      }
    };

    return note;
  });
};
