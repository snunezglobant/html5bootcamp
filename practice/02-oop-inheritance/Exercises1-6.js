/* 1) Create a Movie object */

/* First alternative: adding said methods directly to the constructor function */
/* This alternative has a big disadvantage: These methods would be re-created for
every instance of the object, every time the constructor is called.
By adding the methods using the object's prototype property, they're only created
once, and every instance just inherits them, sharing the same reference.
On the other hand, methods declared inside the constructor can access "private"
variables, while inherited methods cannot.
*/
/*
function Movie() {
  this.play = function() {
    //
  };

  this.stop = function() {
    //
  };

  this.set = function(attr, value) {
    //
  };

  this.get = function(att) {
    //
  };
}
*/

/* Second alternative: adding the methods using the object's prototype property */

function Movie() {}

Movie.prototype.set = function(attr, value) {
  this[attr] = value;
};

Movie.prototype.get = function(attr) {
  return this[attr];
};


/* 2) Instantiate some of your favorite movies and play with them in the console. */

var theLordOfTheRings = new Movie();
var theAvengers = new Movie();
var theGodfather = new Movie();
var theMatrix = new Movie();

theLordOfTheRings.set("title", "The Lord of The Rings");

theAvengers.set("title", "The Avengers");

theGodfather.set("title", "The Godfather");
theGodfather.set("main character", "Marlon Brando")

theMatrix.set("title", "The Matrix");
theMatrix.set("release date", 1999);


/* 3) Add a MovieObserver class that listens for "playing" and “stopped” events. */

var MovieObserver = {}

$.subscribe("playing", function(event, params) {
  MovieObserver.eventPlaying(params);
});

$.subscribe("stopped", function(event) {
  MovieObserver.eventStopped();
});


/* 4) Publish "playing" event on Movie.play(). */
Movie.prototype.play = function() {
  $.publish("playing", [{title: this.get("title")}]);
};

/* 5) Publish "stopped" event on Movie.stop(). */

Movie.prototype.stop = function() {
  $.publish("stopped");
};


/* Declare the methods that will be triggered by the events */
/* 6) Log to console when each event is fired. */

MovieObserver.eventPlaying = function(params) {
  console.log("Playing \""+params.title+"\"...");
}

MovieObserver.eventStopped = function() {
  console.log("Playback stopped");
}
