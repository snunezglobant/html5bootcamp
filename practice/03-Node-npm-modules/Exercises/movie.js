/* Exercise 3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. */

var Director = require('./director.js');

module.exports = function() {
	var attributes = {
		'title': '',
		'year': '',
		'director': ''
	};

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function( ) {
			var event = "Playing";
			this.notify(event);	
		},
		stop: function() {
			var event = "Stopped";
			this.notify(event);	
		}		
	};
}