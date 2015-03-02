/* Exercise 4 - Create a Director class inside a module and set it as a dependency on the Movie module. */
/* Exercise 6 - Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes. */

exports.Director = function( name ) {
	var attributes = {
		'name': name,
		'quotes': []
	};

	return {
		speak: function() {
			console.log(this.get("name") + " says:" + this.get("quotes"));
		},
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		}
	}
};