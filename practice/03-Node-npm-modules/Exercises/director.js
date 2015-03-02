/* Exercise 4 - Create a Director class inside a module and set it as a dependency on the Movie module. */

module.exports = function( name ) {
	//Exercise 6 - Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.
	var attributes = {
		'name': name,
		'quotes': []
	};
	
	return {
		speak: function() {
			console.log(this.get("name") + " says: " + this.get("quotes"));
		},
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		}
	};
}