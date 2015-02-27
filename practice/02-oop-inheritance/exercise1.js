//Movie Object version 2
function Movie(title, year) {

	this.title=title;
	this.year=year;

	
}

Movie.prototype.play= function(){
	console.log( this.title + " is playing...");

};

Movie.prototype.stop= function(){
	console.log(this.title+" stopped playing...");


};

Movie.prototype.set=function(string,value){
	if (string==="title") {this.title=value} else{this.year=value};

};

Movie.prototype.get=function(){
	return this.title;

};