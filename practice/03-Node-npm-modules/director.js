var Movie = require('./movie.js');

var Director = function(name){
	
	this.name = name;
	this.attributes= {};

};

Director.prototype.setAttr = function(attr,value){
this.attributes[attr] = value;
};

Director.prototype.getAttr = function(attr){
	return this.attributes[attr];
};

Director.prototype.speak = function(){

console.log("The Director"+" "+this.name+"says"+" "+this.attributes.quotes[0]);

};


var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.setAttr('quotes', ['Cast is everything.', 'Do what ...']);
alien.setAttr('director', ridleyScott);
alien.setAttr('title', 'Alien');
alien.getTitle();
alien.getAttr('director').speak();






