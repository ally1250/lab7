var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects.projects.forEach((p) => { p['viewAlt'] = false; });
  response.render('index', projects);
};

exports.viewAlt = function(request, response){
	projects.projects.forEach((p) => { p['viewAlt'] = true; });
	response.render('index', projects);
};