(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
var movie = require("./movie.js");
var harry = new movie();
harry.set('title','Harry Potter 1');
harry.set('duration','160min');
var director = require("./director.js");
var harrydir =  new director();
harrydir.set('name','Chris Columbus');
harrydir.set('quotes',['Hi how are you?', 'fine and you?']);
harry.set('director',harrydir);
harry.get('director').speak();

},{"./director.js":1,"./movie.js":3}],3:[function(require,module,exports){
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
},{}]},{},[2]);
