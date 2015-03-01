(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Director(name,quotes){
	this.name=name;
	this.quotes=[];	
	this.set=function(attr,value){
		this.attributes[attr];
	}
	this.get = function(){
		return this.attributes[attr];
	}	
	Director.prototype.speak=function(){
		var string;
		for(var i=0; i<quotes.length; i++){
			if(i==0){
				string=string+JSON.stringify(quotes[i]);
			}
			else{
				string=string+", "+JSON.stringify(quotes[i]);
			}	
		};
		return console.log(this.name+"says :"+string);
	};
};
module.exports=Director;


},{}],2:[function(require,module,exports){
var Director = require("./Director");
console.log("Pasa");
function Movie(){  
  this.attributes={};         
  function set(key,value){
        this.attributes[key]=value;        
  };
  function get(key){
      return  this.attributes[key];        
  };
};
module.exports=Movie; 

},{"./Director":1}],3:[function(require,module,exports){
$('document').ready=(function(){
	var Movie= require('./Movie');
	lotr = new Movie();	
	var peterJackson = new Director('Peter Jackson');
	peterJackson.set('quotes', ['The vast majority of the CGI budget is labor','Fuck off']);
	lotr.set('director', peterJackson);
	lotr.get('director').speak();
});
},{"./Movie":2}]},{},[3]);
