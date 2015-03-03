//A MOVIE

var Movies = Backbone.Model.extend({
  	defaults:{
  		title : '',
  		rating : '',
  		director: '', 
  		genre:'',
      plot: '',
      year: ''
  	},
});

// A MOVIE COLLECTION
var MoviesCollection = Backbone.Collection.extend({
  model: Movies
});

// MOVIES VIEW
var MoviesView = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
      this.collection.each(function(movies){
          var movieView = new MovieView({ model: movies });
          this.$el.append(movieView.render().el); // calling render method manually..
      }, this);

      return this; // returning this for chaining..
  }
});

// A MOVIE VIEW
var MovieView = Backbone.View.extend({
  tagName: 'li',
  //template: _.template($('#movieTemplate').html()),
       //////////   initialize function is gone from there. So we need to call render method manually now..
  render: function(){
      this.$el.html( this.template(this.model.toJSON()));
      return this;  // returning this from render method..
  }
});

//MOVIE "LISTING"

var moviesCollection = new MoviesCollection([
  {
    name: 'Inception',
    rating: '8.8',
    director: 'Christopher Nolan',
    genre: 'Science Fiction',
    plot: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    year: '2010'
  },

  {
    name: 'The Dark Knight',
    rating: '9.0',
    director: 'Christopher Nolan',
    genre: 'Drama',
    plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    year: '2008'
  },
  
  {
    name: 'Waking Life',
    rating: '7.8',
    director: 'Richard Linklater',
    genre: 'Drama',
    plot: 'A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.',
    year: '2001'
  }
]);


//$(document.body).append(moviesView.render().el); 
$('document').ready(function(){ 
    var moviesView = new MoviesView({ collection: moviesCollection });
    moviesView.render();
    $(document.body).html(moviesView.el);
    
});
      
