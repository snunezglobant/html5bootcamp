$(function() {
	var Movie = Backbone.Model.extend({
		defaults: function() {
			return {
				title: '',
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
		initialize: function() {
			this.template = _.template($('#movie-template').html());
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});


	var MoviesView = Backbone.View.extend({
		model: movies,
		el: $('#movies-container'),
		initialize: function() {
			this.model.on('add', this.render, this);
			this.model.on('remove', this.render, this);
		},
		render: function() {
			var self = this;
			self.$el.html('');
			_.each(this.model.toArray(), function(m, i) {
				self.$el.append((new MovieView({model: m})).render().$el);
			});
			return this;
		}
	});

	$(document).ready(function() {

		var movie1=new Movie({title:'Gladiator',director:'Ridley Scott'});
		var movie2=new Movie({title:'Alien',director:'Ridley Scott'});

		movies.add(movie1);
		movies.add(movie2);
	

		var appView = new MoviesView();
		appView.render();
	});
			
});
