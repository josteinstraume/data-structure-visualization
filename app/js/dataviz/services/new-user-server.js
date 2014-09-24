'use strict'

module.exports = function(app) {
  app.factory('newUserServer', function($http) {
    var parseUser = function(newuser) {
      return {
                name: newuser.name,
                email: newuser.email,
                username: newuser.username,
                password: newuser.password,
                password2: newuser.password2
              }
    };

    var newuser = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v.0.0.1/newuser'
        })
          .error(function(data, status) {
            console.log('error');
            console.log(data);
            console.log(status);
          });
        return promise;
      },

      createUser: function(newuser) {
        var promise = $http.post('/api/v.0.0.1', parseUser(newuser))
          .error(function(data, status) {
            console.log('error');
            console.log(data);
            console.log(status);
          });
      },

      validateEmail: function(newuser) {

      },

      validatePassword: function(newuser) {

      }
    };

    return newuser;
  });
};
