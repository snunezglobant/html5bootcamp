function Movie(title, year) {

	this.title=title;
	this.year=year;

	this.play = function(){
		console.log( this.title + " is playing...");


	};

	this.stop= function(){
		console.log(this.title+" stopped playing...");

	};

	 this.set= function(string, value){

		if (string==="title") {this.title=value} else{this.year=value};
	};

	this.get= function(){

		return this.title;
	};
}

function inheritPrototype(childObject, parentObject) {

    var copyOfParent = Object.create(parentObject.prototype);
    copyOfParent.constructor = childObject;
    childObject.prototype = copyOfParent;
}



/*Movie.prototype.download = function() {
	console.log("downloading...");
};*/

function downloadableMovie(title, year){
	Movie.call(this, title, year);

}

inheritPrototype(downloadableMovie, Movie);

downloadableMovie.prototype.download= function() {
	console.log("downloading...");
};

