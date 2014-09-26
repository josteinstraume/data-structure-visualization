'use strict';

module.exports = function(app) {
  app.factory('auth', function($http, $cookies, $location) {
    var auth = {
      sendJWT: function() {
        if(!$cookies.jwt || $cookies.jwt.length < 10){
          $location.path('/signin');
          return 'noauth';
        }

        $http.defaults.headers.common['jwt'] = $cookies.jwt;
      }
    };

    return auth;
  });
};
