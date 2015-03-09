function Movie(title, year) {

	this.title=title;
	this.year=year;
}

Movie.prototype.set=function(string,value){
	if (string==="title") {this.title=value} else{this.year=value};

};

Movie.prototype.get=function(){
	return this.title;

};

var movie1= new Movie("Terminator",2001);
var movie2 = new Movie("Titanic",2002);
var movie3 = new Movie("Gladiator",2003);
