'use strict';

module.exports = function(app) {
  app.directive('ensureUnique', ['$http', function($http) {
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, c) {
        scope.$watch(attrs.ngModel, function(n) {
          if (!n) return;
          $http({
            method: 'POST',
            url: '/api/check/' + attrs.ensureUnique,
            data: {'field': attrs.ensureUnique}
          }).success(function(data) {
            c.$setValidity('unique', data.isUnique);
          }).error(function(data) {
            c.$setValidity('unique', false);
          });
        });
      }
    };
  }]);
};
