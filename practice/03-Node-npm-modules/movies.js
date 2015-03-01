(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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







},{"./movie.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
