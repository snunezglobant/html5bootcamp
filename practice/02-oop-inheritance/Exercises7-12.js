/* 7) Refactor Movie class as a Module keeping your previous code for reference. */
var Movie = (function() {
  var newMovie = function() {
    this.set = function(attr, value) {
      this[attr] = value;
    };

    this.get = function(attr) {
      return this[attr];
    };

    this.play = function() {
      $.publish("playing", [{title: this.get("title")}]);
    };

    this.stop = function() {
      $.publish("stopped");
    };
  };

  return newMovie;
})();


var MovieObserver = {}

MovieObserver.eventPlaying = function(params) {
  console.log("Playing \""+params.title+"\"...");
}

MovieObserver.eventStopped = function() {
  console.log("Playback stopped");
}

$.subscribe("playing", function(event, params) {
  MovieObserver.eventPlaying(params);
});

$.subscribe("stopped", function(event) {
  MovieObserver.eventStopped();
});


/* 8) Create a DownloadableMovie that extends from Movie adding a download method.
Here you will have to set the correct prototype to DownloadableMovie. */

var DownloadableMovie = (function() {
  var newDownloadableMovie = function() {
    Movie.call(this); // super()

    this.download = function() {
      console.log("Downloading \"" + this.get("title") + "\"...");
    }
  }

  return newDownloadableMovie;
})();

/* Using parasitic combination inheritance, a new object is created with all the
properties and methods of the parent, and is then set as the prototype of the child */
inheritPrototype(DownloadableMovie, Movie);


/* 9) Create a mixin object called Social with the methods: share(friendName) and like(). */

var Social = {
  share: function(friendName) {
    console.log("Sharing \"" + this.get("title") + "\" with " + friendName + "...");
  },
  like: function() {
    console.log("I like \"" + this.get("title") + "\"!");
  }
}


/* 10) Apply the mixin to Movie object and play with the console output. */

extend(Movie.prototype, Social);


/* 11) Create an Actor class and create some actors from one of your favorite movies. */

var Actor = function(name, yearOfBirth) {
  this.name = name;
  this.dateOfBirth = yearOfBirth;
}

var lDiCaprio = new Actor("Leonardo DiCaprio", 1974);
var mCaine = new Actor("Michael Caine", 1933);
var mCotillard = new Actor("Marion Cotillard", 1975);
var jGordonLevitt = new Actor("Joseph Gordon-Levitt", 1981);

var castOfInception = [lDiCaprio, mCaine, jGordonLevitt, mCotillard];


/* Some more instances */

var inception = new Movie();
inception.set("title", "Inception");

var starWars = new Movie();
starWars.set("title", "Star Wars");

var theWall = new DownloadableMovie();
theWall.set("title", "Pink Floyd - The Wall");

var thePianist = new DownloadableMovie();
thePianist.set("title", "The Pianist");


/* 12) Show how you would add an array of actors to a Movie object. */

inception.set("cast", castOfInception);

/* without using a temp array:
inception.set("cast", [lDiCaprio, mCaine, mCotillard, jGordonLevitt]);
*/

console.log(inception.get("cast"));