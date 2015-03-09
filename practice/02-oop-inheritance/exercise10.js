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


var social= {
	share: function(personName){
		console.log("Sharing "+this.title+" with "+personName)

	},
	like: function(){
		console.log("Like+1");
	}
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

extend(Movie.prototype, social);

var movie1 = new Movie("Birdman", 2010);
movie1.share("V. Rivas");
