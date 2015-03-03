var Movie = function (){
 this.attr = {};
};

Movie.prototype.setMovie = function(title,director){
 	this.attr['Title']=title;
 	this.attr['Director']=director;
}; 
Movie.prototype.getMovie = function(){
 	console.log(this.attr['Title'] + " (" + this.attr['Director'] + ")");
}; 

var gladiator = new Movie();
gladiator.setMovie('Gladiator', 'Riddley Scott');
gladiator.getMovie();


module.exports = Movie; 