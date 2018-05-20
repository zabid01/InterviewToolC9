'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/Home').get(core.index1);
	app.route('/about').get(core.about);
};
