var Movie = Backbone.Model.extend({
  defaults: {
      name: 'Interstellar',
      year: '2014',
      genre: 'cience fiction',
      plot: 'a movie action',
      director:'Christopher Nolan',


  }
});



// A List of Movies
var MovieCollection = Backbone.Collection.extend({
  model: Movie
});

// The View for a Movie
var MovieView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#movieTemplate').html()),

  initialize: function(){
      this.render();
  },

  render: function(){
      this.$el.html( this.template(this.model.toJSON()));
  }
});

var peopleCollection = new PeopleCollection([
  {
      name: 'Interstellar',
      year: '2014',
      genre: 'cience fiction',
      plot: 'a movie action',
      director:'Christopher Nolan',
  },
  {
     name: 'Man of Stell',
      year: '2014',
      genre: 'cience fiction',
      plot: 'a movie action',
      director:'Christopher Nolan',
  },
  {
      name: 'Batman',
      year: '2014',
      genre: 'cience fiction',
      plot: 'a movie action',
      director:'Christopher Nolan',
  }
]);

