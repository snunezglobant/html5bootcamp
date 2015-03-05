(function(cash) {
 var Movie = Backbone.Model.extend({
  defaults: function() {
   return {
    title: '',
    year: ''
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
   'blur .year': 'close',
   'keypress .year': 'onEnterUpdate',
   'blur .title': 'closeTitle',
   'keypress .title': 'onEnterUpdateTitle'
 },
 initialize: function() {
   this.template = _.template($('#movie-template').html());
 },
 edit: function(ev) {
   ev.preventDefault();
   this.$('.title').attr('contenteditable', true).focus();
   this.$('.year').attr('contenteditable', true);
 },
 close: function(ev) {
   var year = this.$('.year').text();
   this.model.set('year', year);
   this.$('.year').removeAttr('contenteditable');
 },
 onEnterUpdate: function(ev) {
   var self = this;
   if (ev.keyCode === 13) {
    this.close();
    _.delay(function() { self.$('.year').blur() }, 100);
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
  _.delay(function() { self.$('.title').blur() }, 100);
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

  var movie1=new Movie({title:'The Shawshank Redemption',year:'1995'});
  var movie2=new Movie({title:'Terminator',year:'1984'});
  var movie3=new Movie({title:'Forrest Gump',year:'1995'});


  movies.add(movie1);
  movies.add(movie2);
  movies.add(movie3);


  var appView = new MoviesView();
  appView.render();

  $('#new-movie').submit(function(ev) {
   var m = new Movie({ title: $('#movie-title').val(), year: $('#movie-year').val() });
   movies.add(m);
   console.log(movies.toJSON());
   
   return false;  
 });
  
  var appView = new MoviesView();
});

})(jQuery);