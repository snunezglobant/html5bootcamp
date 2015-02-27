/* Exercise 1 - Creating Movie() class */
/* Modeling the Subject class - (in this case, 'Movie()' is the 'Subject' being observed) */

function Movie() {
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
}; 

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

var avatar = new Movie();
avatar.set("title", "Avatar" );
avatar.set("director", "James Cameron");

/* Playing and Stopping */

inception.play();
avatar.play();

inception.stop();
avatar.stop();