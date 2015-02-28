/* Topic 3: NodeJS, npm, and JavaScript Modules */
/* Exercise 3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. */

module.exports = function () {
	var attributes = {
		'title': '',
		'year': ''
	};

	return {
		set: function( attr, value ) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function( ) {
			var event = "Playing";
			this.notify( event );	
		},
		stop: function() {
			var event = "Stopped";
			this.notify( event );	
		},
		notify: function( event ) {
			var event = event;
			observer.update( attributes['title'], event);
		}
	}
};