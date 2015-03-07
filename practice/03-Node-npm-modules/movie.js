var Movie = function(){
	this.attributes= {
		'title': '',
	 	'duration': '', 
	 	'director': '', 
	 	'actors':''
	};
	this.set = function(att,val){
		this.attributes[att] = val;
	};
	this.get = function(att){
		return this.attributes[att];
	};
};
module.exports = Movie;