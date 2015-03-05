(function($) {
	var Movie = Backbone.Model.extend({
		defaults: function() {
			return {
				title: '',
				actor: ''
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
			'click .edit': 'edit',
			'click .delete': 'delete',
			'blur .actor': 'close',
			'keypress .actor': 'onEnterUpdate'
		},
		initialize: function() {
			this.template = _.template($('#movie-template').html());
		},
		edit: function(ev) {
			ev.preventDefault();
			this.$('.actor').attr('contenteditable', true).focus();
		},
		close: function(ev) {
			var actor = this.$('.actor').text();
			this.model.set('actor', actor);
			this.$('.actor').removeAttr('contenteditable');
		},
		onEnterUpdate: function(ev) {
			var self = this;
			if (ev.keyCode === 13) {
				this.close();
				_.delay(function() { self.$('.actor').blur() }, 100);
			}
		},
		delete: function(ev) {
			ev.preventDefault();
			movies.remove(this.model);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});


	var MoviesView = Backbone.View.extend({
		model: movies,
		el: $('#movie-container'),
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

		var movie1=new Movie({title:'Star Wars',actor:'Ewan Mc Gregor'});
		var movie2=new Movie({title:'Avatar',actor:'Zoe Saldana'});
		var movie3=new Movie({title:'Yes, sir',actor:'Jim Carrey'});
		var movie4=new Movie({title:'Ted',actor:'Mark Walberg'});

		movies.add(movie1);
		movies.add(movie2);
		movies.add(movie3);
		movies.add(movie4);

		var appView = new MoviesView();
		appView.render();

		$('#new-movie').submit(function(ev) {
			var m = new Movie({ title: $('#movie-title').val(), actor: $('#movie-actor').val() });
			movies.add(m);
			console.log(movies.toJSON());
			
			return false;		
		});
				
		var appView = new MoviesView();
	});
			
})(jQuery);
