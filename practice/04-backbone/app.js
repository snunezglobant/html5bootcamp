/* Exercise 1 - Write one Handlebars template to show the details of a movie. */
$(function () {
	/* Data for Movie Description Template */ 
	var movieDescription = {
		name: '',
		year: '',
		duration: '',
		rating: '',
		director: ''
	};

	/* Saving Template in a variable */
	var html = Handlebars.templates['movie-description-template'](movieDescription);
	/* Inserting Template in the page*/
	$(document.body).html(html);

	/* Exercise 2 - Create a second template to render a list of movies. */
	/* Data for Movie List */
	var movieList = {
		//Movie List
	};

	/* Saving Template in a variable */
	html = Handlebars.templates['movie-list-template'](movieList);
	/* Inserting Template in the page*/
	$(document.body).html(html);

	/* Backbone */
	var Movie = Backbone.Model.extend({
		defaults: function() {
			return {
				name: '',
				year: '',
				duration: '',
				rating: '',
				director: ''
			}
		}
	});

	var MoviesList = Backbone.Collection.extend({
		model: Movie
	});

	var movies = new MoviesList();

	var MovieView = Backbone.View.extend({
		model: new Movie(),
		tagName: 'div',
		events: {
			/* Events - (no specified in exercises) */
		},
	});


});