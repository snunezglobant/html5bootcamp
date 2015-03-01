var Movie = function(){

	this.attributes = {};

}
Movie.prototype.setAttr = function(attr,value){
this.attributes[attr] = value;
};

Movie.prototype.getAttr = function(attr){
	return this.attributes[attr];
};

Movie.prototype.getTitle = function(){
	console.log(this.attributes['title']);
};
module.exports = Movie;