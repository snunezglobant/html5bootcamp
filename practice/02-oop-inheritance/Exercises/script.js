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

