(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Movie= require("./classmovie.js");

var Director = function(name){
	this.name = name;
	this.attributes = {"quotes":[]};
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


//*****************************API*******************************
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.setAttr('quotes', ['Cast is everything.', 'Do what ...']);
alien.setMovie('Director', ridleyScott);
alien.getMovie().speak(); //output: Ridley Scott says: 'Cast is...'
//***************************************************************


},{"./classmovie.js":2}],2:[function(require,module,exports){
var Movie = function (){
 this.attr = {};
};

Movie.prototype.setMovie = function(title,director){
 	this.attr['Title']=title;
 	this.attr['Director']=director;
}; 
Movie.prototype.getMovie = function(){
 	//console.log(this.attr['Title'] + " (" + this.attr['Director'] + ")");
 	return this.attr['Director'];
}; 

/*
var gladiator = new Movie();
gladiator.setMovie('Gladiator', 'Riddley Scott');
gladiator.getMovie();
*/

module.exports = Movie; 
},{}]},{},[1]);
