var Director = function(){
	this.attributes= {
		'name': '',
	 	'quotes':''
	};
	this.set = function(att,val){
		this.attributes[att] = val;
	};
	this.get = function(att){
		return this.attributes[att];
	};
	this.speak = function(){
	 	var says = " " + this.attributes.name + " says: ";
	 	var show = this.attributes.quotes.join(says);
	 	console.log(show);
	 	return show;
	};
};
module.exports = Director;