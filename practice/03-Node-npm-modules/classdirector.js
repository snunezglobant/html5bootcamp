var Movie= require("./classmovie.js");

var Director=function(name){
	this.name=name;
	this.attributes={
		"quotes":[]

	};
};


Director.prototype.setAttr = function(attr,value){
	for (var i = value.length - 1; i >= 0; i--) {
		this.attributes[attr].push(value[i]);
	};
}; 

Director.prototype.speak = function(){
	console.log(this.name + " says:  ");
	for (var i = this.attributes["quotes"].length - 1; i >= 0; i--) {
		 console.log(this.attributes["quotes"][i]);
	};
}; 

//var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.setAttr("quotes", ["Cast is everything.", "Do what ..."]);
ridleyScott.speak();
//$(document).html(ridleyScott.speak());
/*alien.setAttr("title","alien");
alien.getAttr("title");
alien.setAttr("director", "Ridley Scott");
alien.getAttr("director");*/