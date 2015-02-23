$(document).ready(function() {
  var movies = new MovieCollection;
  var movieList = new MovieListView({
    collection: movies
  });

  fetchMovieCollection(movies);
  $(".movie-list-container").html(movieList.render().el);
/*
  $(".movie-list").click(function(event) {
    //showMovieDetails()
    console.log(event.target);
  });*/
});


/* 3) Using Backbone, create a movie listing with your favorite movies. Data shall be persisted in localhost. */

var Movie = Backbone.Model.extend({
  defaults: {
    name: "Movie name not specified",
    imageUrl: "http://movies-online.co/data/no_image.png",
  }
});

var MovieCollection = Backbone.Collection.extend({
  model: Movie,
  /* Using Backbone.LocalStorage to add persistance */
  localStorage: new Backbone.LocalStorage("MovieCollection"),
  initialize: function() {
    this.on("add change", this.saveModel);
  },
  saveModel: function(model, collection, options) {
    model.save();
    console.log(model);
  }
});

var MovieListView = Backbone.View.extend({
  events: {
    "click .movie-list > li": "clicked"
  },
  initialize: function() {
    this.template = Handlebars.compile($("#movie-list-template").html());
  },
  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },
  clicked: function(event) {
    showMovieDetails(this.collection.at($(event.currentTarget).data("index")));
  }
});

var MovieDetailsView = Backbone.View.extend({
  events: {
    "click .background": "hideView"
  },
  initialize: function() {
    this.template = Handlebars.compile($("#movie-details-template").html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  hideView: function() {
    removeMovieDetails(this);
  }
});

function fetchMovieCollection(movies) {
  movies.fetch({silent: true});
  /* silent: true prevents an "add" event from being fired */
  if (!movies.length) {
    populateMovieCollection(movies);
  }
}

function populateMovieCollection(movies) {
  movies.add({
    name: "The Dark Knight Rises",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX214_AL_.jpg",
    year: 2012,
    genres: ["Action", "Thriller"],
    director: {name: "Christopher Nolan", url: "http://www.imdb.com/name/nm0634240/"},
    stars: [
      {name: "Christian Bale", url: "http://www.imdb.com/name/nm0000288/"}, 
      {name: "Tom Hardy", url: "http://www.imdb.com/name/nm0362766/"},
      {name: "Anne Hathaway", url: "http://www.imdb.com/name/nm0004266/"}
      ],
    plot: "Eight years after the Joker's reign of anarchy, the Dark Knight is forced to return from his imposed exile to save Gotham City from the brutal guerrilla terrorist Bane with the help of the enigmatic Catwoman."
  });

  movies.add({
    name: "Inception",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX214_AL_.jpg",
    year: 2010,
    genres: ["Action", "Mystery", "Sci-Fi"],
    director: {name: "Christopher Nolan", url: "http://www.imdb.com/name/nm0634240/"},
    stars: [
      {name: "Leonardo DiCaprio", url: "http://www.imdb.com/name/nm0000138/"}, 
      {name: "Joseph Gordon-Levitt", url: "http://www.imdb.com/name/nm0330687/"},
      {name: "Ellen Page", url: "http://www.imdb.com/name/nm0680983/"}
      ],
    plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  });

  /* Adding an array of movies */
  movies.add([{
    name: "The Lord of the Rings: The Fellowship of The Ring",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SY317_CR1,0,214,317_AL_.jpg",
    year: 2001,
    genres: ["Adventure", "Fantasy"],
    director: {name: "Peter Jackson", url: "http://www.imdb.com/name/nm0001392/"},
    stars: [
      {name: "Elijah Wood", url: "http://www.imdb.com/name/nm0000704/"},
      {name: "Ian McKellen", url: "http://www.imdb.com/name/nm0005212/"},
      {name: "Orlando Bloom", url: "http://www.imdb.com/name/nm0089217/"}
      ],
    plot: "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron."
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY317_CR1,0,214,317_AL_.jpg",
    year: 2002,
    genres: ["Adventure", "Fantasy"],
    director: {name: "Peter Jackson", url: "http://www.imdb.com/name/nm0001392/"},
    stars: [
      {name: "Elijah Wood", url: "http://www.imdb.com/name/nm0000704/"},
      {name: "Ian McKellen", url: "http://www.imdb.com/name/nm0005212/"},
      {name: "Viggo Mortensen", url: "http://www.imdb.com/name/nm0001557/"}
      ],
    plot: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX214_AL_.jpg",
    year: 2003,
    genres: ["Adventure", "Fantasy"],
    director: {name: "Peter Jackson", url: "http://www.imdb.com/name/nm0001392/"},
    stars: [
      {name: "Elijah Wood", url: "http://www.imdb.com/name/nm0000704/"},
      {name: "Ian McKellen", url: "http://www.imdb.com/name/nm0005212/"},
      {name: "Viggo Mortensen", url: "http://www.imdb.com/name/nm0001557/"}
      ],
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  }]);

  movies.add({
    name: "Devil's Advocate",
    imageUrl: "http://ia.media-imdb.com/images/M/MV5BMTcyMzI3NDM4Nl5BMl5BanBnXkFtZTcwMTUxOTYzNA@@._V1_SX214_AL_.jpg",
    year: 1997,
    genres: ["Drama", "Mystery", "Thriller"],
    director: {name: "Taylor Hackford", url: "http://www.imdb.com/name/nm0000431/"},
    stars: [
      {name: "Keanu Reeves", url: "http://www.imdb.com/name/nm0000206/"}, 
      {name: "Al Pacino", url: "http://www.imdb.com/name/nm0000199/"},
      {name: "Charlize Theron", url: "http://www.imdb.com/name/nm0000234/"}
      ],
    plot: "An exceptionally adept Florida lawyer is offered a job to work in New York City for a high-end law firm with a high-end boss - the biggest opportunity of his career to date."
  });
}

function showMovieDetails(movie) {
  var movieDetailsView = new MovieDetailsView({
    model: movie
  });

  $(".movie-details-container").html(movieDetailsView.render().el)
  .addClass("fadein");
  $(".movie-list-container, header").addClass("blurred");
}

function removeMovieDetails(view) {
  view.remove();
  $(".movie-details-container").removeClass("fadein");
  $(".movie-list-container, header").removeClass("blurred");
}
