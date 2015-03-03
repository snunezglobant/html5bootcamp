(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = function( name ) {
	var attributes = {
		'name': name,
		'quotes': []
	};
	
	return {
		speak: function() {
			console.log(this.get("name") + " says: " + this.get("quotes"));
		},
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		}
	};
}
},{}],2:[function(require,module,exports){
var Director = require('./director.js');

module.exports = function() {
	var attributes = {
		'title': '',
		'year': '',
		'director': ''
	};

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function( ) {
			var event = "Playing";
			this.notify(event);	
		},
		stop: function() {
			var event = "Stopped";
			this.notify(event);	
		}		
	};
}
},{"./director.js":1}],3:[function(require,module,exports){
var Movie = require('./movie.js');
var Director = require('./director.js')

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');

ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();
},{"./director.js":1,"./movie.js":2}]},{},[3]);
