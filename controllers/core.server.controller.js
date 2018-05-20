'use strict';

/**
 * Module dependencies.
 */

exports.index = function(req, res) {
	res.render('./../public/views/intTool/Home.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.index1 = function(req, res) {
	res.render('./../public/views/intTool/Home.ejs', {
		user: req.user || null,
		request: req
	});
};


exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};
