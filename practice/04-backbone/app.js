/* Backbone - Model */
Movie = Backbone.Model.extend({
	initialize: function() {
		console.log("Movie Object is created");
	},

	defaults: {
		name: 'default name',
		year: 'default year',
		duration: 'default duration',
		rating: 'default rating',
		director: 'default director'
	}
});

/* Instances of Movie */
var movie1 = new Movie({
	name: "Interstellar",
	year: "2014",
	duration: "169 min",
	rating: "8,8/10",
	director: "Christopher Nolan"
});

var movie2 = new Movie({
	name: "Inception",
	year: "2010",
	duration: "148 min",
	rating: "8,8/10",
	director: "Christopher Nolan"
});

/* Backbone - Collection */
List = Backbone.Collection.extend({
	model: Movie
});

/* Instance of List */
var movieList = new List([movie1, movie2]); //Adding some instances of Movie in the List (Collection).

/* Backbone - Views */
MovieView = Backbone.View.extend({
	initialize: function() {
		console.log("A View of Movie was created");
	},

	render: function( data ) {
		var template = Handlebars.templates['movie-description-template'](data);
		this.$el.html(template);
	}
});

ListView = Backbone.View.extend({
	el: $('#container'),

	initialize: function() {
		console.log("A View of List was created");
		this.render();
	},

	render: function( data ) {
		var template = Handlebars.templates['movie-list-template'](data);
		this.$el.html(template);
	},

 events: {
		"click .edit": 'edit',
		"click .remove": 'remove' 
	}
	//edit method
	//remove method
});