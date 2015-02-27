/* Exercise 1 - Creating Movie() class */
/* Modeling the Subject class - (in this case, 'Movie()' is the 'Subject' being observed) */

/* Movie class is commented because down below was refactored as a Module - (Exercise 7) */

/* function Movie() {
	this.attributes = {
		'title':'',
		'director':'',
		'year':''
	};	
	
	this.observer = new MovieObserver();
}

Movie.prototype.set = function( attr, value ) {
	this.attributes[ attr ] = value;
};

Movie.prototype.get = function(attr) {
	return this.attributes[ attr ];
};

Movie.prototype.play = function( title ) {
	var event = "Playing";
	this.notify( event );
};

Movie.prototype.stop = function() {
	var event =  "Stopped";
	this.notify( event );
};

Movie.prototype.addObserver = function (observer) {
	this.oList.add(observer);
};

 
 Movie.prototype.notify = function ( event ) {
 	var event = event;
	this.observer.update( this.attributes['title'], event);
}; */

/* Exercise 7 - Refactor Movie class as Module keeping your previous code for reference */
/* Refactoring Movie() as a Module */
var Movie = {};

var Movie = ( function () {
	var attributes = {
		'title': '',
		'director': '',
		'year': ''
	};

	var observer = new MovieObserver();

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function( ) {
			var event = "Playing";
			this.notify(event);	
		},
		stop: function() {
			var event = "Stopped";
			this.notify(event);	
		},
		notify: function( event ) {
			var event = event;
			observer.update( attributes['title'], event);
		}
	};
});

/* Exercise 3 - Adding a MovieObserver class() */

function MovieObserver() {
	this.update = function( movie, event ) {
		console.log( movie + " " + event );
	};
}

/* Exercise 2 - Adding some instances of Movie() */

var inception = new Movie();
inception.set("title", "Inception" );
inception.set("director", "Christopher Nolan" );
inception.set("year", "2010");

var avatar = new Movie();
avatar.set("title", "Avatar" );
avatar.set("director", "James Cameron");
avatar.set("year", "2009");


/* Playing and Stopping */

inception.play();
avatar.play();

inception.stop();
avatar.stop();

/* Exercise 8 - Create a DownloadableMovie that extends from Movie adding a download method. 
Here you will have to set the correct prototype to DownloadableMovie. */

var DownloadableMovie = function() {}
 
DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor = DownloadableMovie;
 
DownloadableMovie.prototype.download = function () {
  console.log("Downloading " + this.get("title") + "...");
};

var mask = new DownloadableMovie();
mask.set("title", "The Mask");
mask.set("director", "Chuck Russell");
mask.set("year", "1994");
mask.download();

/* Exercise 9 - Create a mixin object called Social with the methods: share(friendName) and like(). */

var Social = {

	share: function( friendName ) {
		console.log( "Sharing " + this.get("title") + "with " + friendName );
	},
	like: function() {
		console.log( this.get("title") + " got a like!");
	}
}

/* Exercise 10 - Apply the mixin to Movie object and play with the console output. */

$.extend(true, Movie.prototype, Social);

var madagascar = new Movie();
madagascar.set("title", "Madagascar");
madagascar.share("JP Navarro");
madagascar.like();

/* Exercise 11 - Create an Actor class and create some actors from one of your favorite movies. */

var Actor = {};

var Actor = ( function () {
	var attributes = {
		'name': '',
		'age': ''
	};

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		}
	};
});

var dicaprio = new Actor();
dicaprio.set("name", "Leonardo DiCaprio");
dicaprio.set("birthday", "11/11/74");

var jnicholson = new Actor();
jnicholson.set("name", "Jack Nicholson");
jnicholson.set("birthday", "04/22/37");

/* Show how you would add an array of actors to a Movie object. */ 

var cast = [dicaprio, jnicholson];

madagascar.set("cast", cast);
console.log(madagascar.get("cast"));