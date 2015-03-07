
var Director = function(){
	this.attributes= {
		'name': '',
	 	'quotes':''
	 } ;
	

	 this.set = function(att,val){

	 	this.attributes[att] = val;
	 }

	 this.get = function(){

	 	return (this.attributes.name + this.attributes.quotes);
	 }


	 this.speak = function(){
		

		console.log(this.attributes.quotes);
	 	

	 	return this.attributes.name + " says: " + this.attributes.quotes;
	 

	 }
};

module.exports = Director;