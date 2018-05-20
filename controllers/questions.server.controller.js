var mongoose = require('mongoose');
var Question = require('./../models/Question.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Question.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var question = new Question(req.body);
  question.user = req.user;
  question.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.question);
};


exports.delete = function(req, res) {
	var question = req.question;
	question.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(question);
		}
	});
};


module.exports.update = function(req, res) {
  var question = req.question;

  	question = _.extend(question, req.body);

  	question.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(question);
  		}
  	});
};

exports.History = function(req, res) {
	res.render('./../public/views/intTool/History.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.Admin = function(req, res) {
	res.render('./../public/views/intTool/Admin.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.SavedPack = function(req, res) {
	res.render('./../public/views/intTool/SavedPack.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.AddCusQues = function(req, res) {
	res.render('./../public/views/intTool/AddCusQues.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.questionByID = function(req, res, next, id) {
	Question.findById(id).populate('user', 'email').exec(function(err, question) {
		if (err) return next(err);
		if (!question) return next(new Error('Failed to load question ' + id));
		req.question = question;
		next();
	});
};