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
		events: {
			'click .edit': 'edit',
			'click .delete': 'delete',
			'blur .director': 'close',
			'keypress .director': 'onEnterUpdate',
			'blur .title': 'closeTitle',
			'keypress .title': 'onEnterUpdateTitle'
		},
		initialize: function() {
			this.template = _.template($('#movie-template').html());
		},
		edit: function(ev) {
			ev.preventDefault();
			this.$('.title').attr('contenteditable', true).focus();
			this.$('.director').attr('contenteditable', true);
		},
		close: function(ev) {
			var director = this.$('.director').text();
			this.model.set('director', director);
			this.$('.director').removeAttr('contenteditable');
		},
		onEnterUpdate: function(ev) {
			var self = this;
			if (ev.keyCode === 13) {
				this.close();
				_.delay(function() { self.$('.director').blur() }, 10);
			}
		},
		closeTitle: function(ev) {
			var title = this.$('.title').text();
			this.model.set('title', title);
			this.$('.title').removeAttr('contenteditable');
		},
		onEnterUpdateTitle: function(ev) {
			var self = this;
			if (ev.keyCode === 13) {
				this.close();
				_.delay(function() { self.$('.title').blur() }, 10);
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
		var movie3=new Movie({title:'Predestination',director:'Peter Spierig, Michael Spierig'});
		var movie4=new Movie({title:'Birdman',director:' Alejandro González Iñárritu'});

		movies.add(movie1);
		movies.add(movie2);
		movies.add(movie3);
		movies.add(movie4);

		$('#new-movie').submit(function(ev) {
			var m = new Movie({ title: $('#movie-title').val(), director: $('#movie-director').val() });
			movies.add(m);
			console.log(movies.toJSON());
			
			return false;		
		});
				
		var appView = new MoviesView();
		appView.render();
	});
			
});
