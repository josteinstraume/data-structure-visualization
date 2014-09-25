module.exports = function(app) {
	app.controller('dataController',
		[ '$scope',
		function($scope) {
      $scope.d3 = require('d3');
		} ]);
};
