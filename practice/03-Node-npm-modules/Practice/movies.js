(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Exercise 4 - Create a Director class inside a module and set it as a dependency on the Movie module. */

exports.director = function() {

}
},{}],2:[function(require,module,exports){
/* Topic 3: NodeJS, npm, and JavaScript Modules */
/* Exercise 3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. */

var m = require('./director');

exports.movie =  function () {
	var attributes = {
		'title': '',
		'director': '',
		'year': ''
	};

	return {
		set: function( attr, value) {
			attributes[ attr ] = value;
		},
		get: function( attr ) {
			return attributes[ attr ];
		},
		play: function() {
			var event = "Playing";
			this.notify(event);	
		},
		stop: function() {
			var event = "Stopped";
			this.notify(event);	
		}		
	}
};


},{"./director":1}]},{},[2]);
