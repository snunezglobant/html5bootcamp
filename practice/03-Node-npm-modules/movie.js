//TO CHECK THAT WORKS IN BROWSER

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.setAttr("quotes", ["Cast is everything.", "Do what ..."]);
ridleyScott.speak();
alien.setAttr("title","alien");
alien.getAttr("title");
alien.setAttr("director", "Ridley Scott");
alien.getAttr("director");



},{"./classmovie.js":2}],2:[function(require,module,exports){
var Movie=function (){
 this.attr={
 	"title":"",
 	"nombredirector":""
 };
};

 Movie.prototype.setAttr = function(attr,value){
 	this.attr[attr]=value;
}; 
 Movie.prototype.getAttr = function(attr){
 	console.log(this.attr[attr]);
}; 



module.exports = Movie; 

},{}]},{},[1]);