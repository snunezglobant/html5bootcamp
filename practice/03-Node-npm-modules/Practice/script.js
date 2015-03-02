var Movie = require('./movie.js');
var Director = require('./director.js')
var $ = jQuery = require('jquery');

/* Exercise 7 - Add a Director to a Movie - (Implementing the API provided) */

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak(); 