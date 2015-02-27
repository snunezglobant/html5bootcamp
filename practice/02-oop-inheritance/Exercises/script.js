// Exercise 1 - Creating Movie() class
function Movie() {
	this.title = "";

	this.observers = new MovieObserver();

	this.set = function( title ) {
		this.title = title;
	};

	this.get = function() {
		return this.title;
	};
	this.play = function( title ) {
		console.log("Playing " + this.title);
	};
	this.stop = function() {
		console.log( "Stopped" );
	};
};

/* Modeling the Subject class - 
(in this case, 'Movie()' is the Subject being observed) */

Movie.prototype.addObserver = function ( observer ) {
	this.observers.add( observer );
};

Movie.prototype.removeObserver = function( observer ) {
	this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

Movie.prototype.notify = function ( context ) {
	var observerCount = this.observers.count();
	for( var i = 0; i < observerCount; i++ ) {
		this.observers.get(i).update( context );
	}
};

// Exercise 2 - Adding some instances of Movie()
var inception = new Movie();
inception.set( "Inception" );
inception.play();

var avatar = new Movie();
avatar.set( "Avatar" );
avatar.play();

// Exercise 3 - Adding a MovieObserver class()

function MovieObserver() {
	this.update = function() {

	};
}

/* Modeling the List of Observers class */

function ObserverList() {
	this.observerList = [];
}

ObserverList.prototype.add = function( obj ) {
	return this.observerList.push( obj );
};

ObserverList.prototype.count = function() {
	return this.observerList.length;
};

ObserverList.prototype.get = function( index ) {
	if( index > -1 && index < this.observerList.length ) {
		return this.observerList[ index ];
	}
};

ObserverList.prototype.indexOf = function ( obj, startIndex ) {
	var i = startIndex;

	while ( i < this.observerList.length ) {
		if( this.observerList[i] === obj ) {
			return i;
		}
		i++;
	}
	return -1;
};

ObserverList.prototype.removeAt = function( index ) {
	this.observerList.splice( index, 1 );
};



