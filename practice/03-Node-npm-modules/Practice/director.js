/* Topic 3: NodeJS, npm, and JavaScript Modules */
/* Exercise 4 - Create a Director class inside a module and set it as dependency on the Movie module. */

var director = require('./movie');

module.exports = function() {
	var attributes = {
		'name': '',
		'birthday': ''
	};

	return {
		set: function( attr, value ) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		}		
};