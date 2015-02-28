var Movie= require('./movie.js');

var Director=function(name){
	this.name=name;
	this.attributes={

	};
};


Director.prototype.setAttr = function(attr,value){
 	this.attributes[attr]=value;
}; 

Director.prototype.speak = function(){
 	console.log(this.attributes.quotes[0]);
}; 

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.setAttr('quotes', ['Cast is everything.', 'Do what ...']);
ridleyScott.speak();
alien.setAttr('title','alien');
alien.getAttr('title');
alien.setAttr('director', 'Ridley Scott');
alien.getAttr('director');



