'use strict'

module.exports = function(app) {
  app.directive('newBST', function() {
    var direc = {
      restrict: 'EAC',
      templateUrl: 'views/treeview.html'
    }

    return direc;
  });
};
