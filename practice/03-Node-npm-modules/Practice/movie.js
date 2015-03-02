/* Topic 3: NodeJS, npm, and JavaScript Modules */
/* Exercise 3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. */

var Movie = require('./director.js');

exports.Movie =  function () {
	var attributes = {
		'title': '',
		'director': '',
		'year': ''
	};

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function() {
			var event = "Playing";
			this.notify(event);	
		},
		stop: function() {
			var event = "Stopped";
			this.notify(event);	
		}		
	}
};