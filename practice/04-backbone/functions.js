$(document).ready(function() {
  var movies = new MovieCollection;
  var movieList = new MovieListView({
    collection: movies
  });

  fetchMovieCollection(movies);
  $(".movie-list-container").html(movieList.render().el);
});


/* 3) Using Backbone, create a movie listing with your favorite movies. Data shall be persisted in localhost. */

var Movie = Backbone.Model.extend({
  defaults: {
    name: "Movie name not specified",
    imageUrl: "http://movies-online.co/data/no_image.png"
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
  }
});

var MovieListView = Backbone.View.extend({
  events: {
    "click .movie-item": "showDetails", // 4)
    "mouseenter .movie-item": "showToolbox", // 5)
    "mouseleave .movie-item": "hideToolbox",
    "click .add": "addModel",
    "click .movie-item .edit": "editModel",
    "click .movie-item .remove": "removeModel"
  },
  initialize: function() {
    this.template = Handlebars.compile($("#movie-list-template").html());
  },
  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },
  showDetails: function(event) {
    showMovieDetails(this.collection.get($(event.currentTarget).data("id")));
  },
  showToolbox: function(event) {
    $(event.currentTarget).find(".toolbox").show();
  },
  hideToolbox: function(event) {
    $(event.currentTarget).find(".toolbox").hide();
  },
  addModel: function(event) {
    showMovieEditor(null, this.collection, this);
  },
  editModel: function(event) {
    event.stopPropagation();
    showMovieEditor(this.collection.get($(event.currentTarget).parents(".movie-item").data("id")), this.collection, this);
  },
  removeModel: function(event) {
    event.stopPropagation();
    this.collection.get($(event.currentTarget).parents(".movie-item").data("id")).destroy();
    this.render();
  }
});


/* 4) Show movie details in a separate details view. */

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
  /* fetch stored movies. silent: true prevents an "add" event from being fired */
  movies.fetch({silent: true});
  /* if there are no stored movies, populate the list with some predefined ones */
  if (!movies.length) {
    populateMovieCollection(movies);
  }
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


/* 5) Allow to add / edit / remove movies from the list. */

function showMovieEditor(movie, movies, listView) {
  var template = Handlebars.compile($("#movie-edition-template").html());
  var context = {};

  if (movie) {
    var fullData = movie.toJSON();
    var selectedData = {};

    for (var attr in fullData) {
      if (attr !== "id") {
        selectedData[attr] = fullData[attr];
      }
    }

    context.title = "Edit movie:";
    context.movieData = JSON.stringify(selectedData, null, 4);

    $(".movie-edition-container").html(template(context));
    $(".done").click(function() {
      if (editMovie(movie, $(".movie-data textarea").val())) {
        listView.render();
        $(".movie-edition-container *").remove();
        $(".movie-edition-container").removeClass("fadein");
        $(".movie-list-container, header").removeClass("blurred");
      }
    });
  }
  else {
    context.title = "New movie:";
    context.movieData = JSON.stringify({
      name: "<Movie title>",
      imageUrl: "<URL to the movie's poster>",
      year: "<year>",
      genres: ["<Genre 1>", "<Genre 2>", "<...>"],
      director: {name: "<Director's name>", url: "<URL to the Director's web page>"},
      stars: [
        {name: "<Actor 1>", url: "<URL to the actor's web page>"}, 
        {name: "<Actor 2>", url: "<URL to the actor's web page>"},
        {name: "<Actor 3>", url: "<URL to the actor's web page>"}
        ],
      plot: "<Plot>"
    }, null, 4);
    $(".movie-edition-container").html(template(context));
    $(".done").click(function() {
      if (addNewMovie(movies, $(".movie-data textarea").val())) {
        listView.render();
        $(".movie-edition-container *").remove();
        $(".movie-edition-container").removeClass("fadein");
        $(".movie-list-container, header").removeClass("blurred");
      }
    });
  }

  $(".movie-edition-container").addClass("fadein");
  $(".movie-list-container, header").addClass("blurred");
  $(".movie-data textarea").focus();

  $(".cancel").click(function(event) {
    $(".movie-edition-container *").remove();
    $(".movie-edition-container").removeClass("fadein");
    $(".movie-list-container, header").removeClass("blurred");
  });
}

function addNewMovie(movies, data) {
  try {
    movies.add(JSON.parse(data));
    return true;
  }
  catch(e) {
    alert("The movie data must be JSON formatted.");
    return false;
  }
}

function editMovie(movie, data) {
  try {
    var parsedData = JSON.parse(data);
    var id = movie.get("id");

    movie.clear({silent: true});
    movie.set("id", id, {silent: true});
    movie.set(movie.defaults, {silent: true});
    movie.set(parsedData);
    return true;
  }
  catch(e) {
    alert("The movie data must be JSON formatted.");
    return false;
  }
}

function populateMovieCollection(movies) {
  movies.add({
    name: "The Dark Knight Rises",
    imageUrl: "http://image.tmdb.org/t/p/w396/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg",
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
    imageUrl: "http://image.tmdb.org/t/p/w396/wlrjaMWMP8gpELu2oFNW0VJHEy1.jpg",
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
    imageUrl: "http://image.tmdb.org/t/p/w396/bxVxZb5O9OxCO0oRUNdCnpy9NST.jpg",
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
    imageUrl: "http://image.tmdb.org/t/p/w396/5o5fv1dHG7vWoH2hmqwihVPBoBm.jpg",
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
    imageUrl: "http://image.tmdb.org/t/p/w396/50LoR9gJhbWZ5PpoHgi8MNTYgzd.jpg",
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
    imageUrl: "http://image.tmdb.org/t/p/w396/eSivb4EyOAyEum70mOSHtAWiUe3.jpg",
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

  movies.add({
    name: "The Godfather",
    imageUrl: "http://image.tmdb.org/t/p/w396/6x7Gy9Ca2V8yVuBfbLqoZ2zOMx5.jpg",
    year: 1972,
    genres: ["Crime", "Drama"],
    director: {name: "Francis Ford Coppola", url: "http://www.imdb.com/name/nm0000338/"},
    stars: [
      {name: "Marlon Brando", url: "http://www.imdb.com/name/nm0000008/"}, 
      {name: "Al Pacino", url: "http://www.imdb.com/name/nm0000199/"},
      {name: "James Caan", url: "http://www.imdb.com/name/nm0001001/"}
      ],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  });

  movies.add({
    name: "Cast Away",
    imageUrl: "http://image.tmdb.org/t/p/w396/qQpn6ZX5dF3SeW9nSoLECxwN46D.jpg",
    year: 2000,
    genres: ["Adventure", "Drama"],
    director: {name: "Robert Zemeckis", url: "http://www.imdb.com/name/nm0000709/"},
    stars: [
      {name: "Tom Hanks", url: "http://www.imdb.com/name/nm0000158/"}, 
      {name: "Helen Hunt", url: "http://www.imdb.com/name/nm0000166/"},
      {name: "Paul Sanchez", url: "http://www.imdb.com/name/nm0584052/"}
      ],
    plot: "A FedEx executive must transform himself physically and emotionally to survive a crash landing on a deserted island."
  });

  movies.add({
    plot: "Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores. Quo no falli viris intellegam, ut fugit veritus placerat per. Ius id vidit volumus mandamus, vide veritus democritum te nec, ei eos debet libris consulatu. No mei ferri graeco dicunt, ad cum veri accommodare. Sed at malis omnesque delicata, usu et iusto zzril meliore. Dicunt maiorum eloquentiam cum cu, sit summo dolor essent te. Ne quodsi nusquam legendos has, ea dicit voluptua eloquentiam pro, ad sit quas qualisque. Eos vocibus deserunt quaestio ei. Blandit incorrupte quaerendum in quo, nibh impedit id vis, vel no nullam semper audiam."
  });
}
