'use strict';

module.exports = function(app) {
  app.factory('tutorialsServer', function($http) {

    var errFunc = function(data, status) {
      console.log('error!');
      console.log(data);
      console.log(status);
    };

    var parseSkill = function(skill) {
      console.log(skill.skillType.type);
      return {skillBody: skill.skillBody,
              skillType: skill.skillType.type
            };
    };

    var skill = {
      index: function() {
        var promise = $http({
          method: 'GET',
          url: '/api/v_0_0_1/tutorials'
        })
          .error(function(data, status) {
            errFunc(data,status);
          });
        return promise;
      },

      saveNewSkill: function(skill) {
        var promise = $http.post('/api/v_0_0_1/tutorials', parseSkill(skill))
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },

      saveOldSkill: function(skill) {
        var promise = $http.put('/api/v_0_0_1/tutorials/' + skill._id, parseSkill(skill))
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },

      deleteSkill: function(skill) {
        var promise = $http.delete('/api/v_0_0_1/tutorials/' + skill._id)
          .error(function(data,status) {
            errFunc(data,status);
          });
        return promise;
      },
    };

    return skill;

  });
};
