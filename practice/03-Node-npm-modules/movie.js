
var Movie = function(){
	this.attributes= {
		'title': '',
	 	'duration': '', 
	 	'director': '', 
	 	'actors':''
	 } 

	 this.set = function(att,val){

	 	this.attributes[att] = val;
	 }

	 this.getDirector = function(){

	 	return this.attributes.director;
	 }
	
};

module.exports = Movie;