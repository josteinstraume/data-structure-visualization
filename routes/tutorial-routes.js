'use strict';

var Tutorial = require('../models/tutorial');

module.exports = function(app) {
  var baseUrl = '/api/v_0_0_1/tutorials';

  app.get(baseUrl, function(req, res){
    Tutorial.find({}, function(err, tutorials) {
      if (err) return res.status(500).json(err);
      return res.json(tutorials);
    });
  });

  app.post(baseUrl, function(req, res) {
    var tutorial = new Tutorial(req.body);
    tutorial.save(function(err, resTutorial) {
      if (err) return res.status(500).json(err);
      return res.send(resTutorial);
    });
  });

  app.get(baseUrl + '/:id', function(req, res) {
    Tutorial.findOne({'_id': req.params.id}, function(err, tutorial) {
      if (err) return res.status(500).json(err);
      return res.json(tutorial);
    });
  });

  app.put(baseUrl + '/:id', function(req, res) {
    var tutorial = req.body;
    delete tutorial._id;
    Tutorial.findOneAndUpdate({'_id': req.params.id}, tutorial, function(err, resTutorial) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resTutorial);
    });
  });

  app.delete(baseUrl + '/:id', function(req, res) {
    Tutorial.remove({'_id': req.params.id}, function(err) {
      if (err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
