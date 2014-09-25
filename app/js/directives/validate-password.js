'use strict';
module.exports = function(app) {
  app.directive('validatePassword', function() {
    return{
      restrict : 'A',
      templateUrl : "validate-password.html",
      // link: function() {
      //   return this.user.password === this.user.passwordConfirmation;
      // }
    };
  });
};
