var Movie = require('./movie.js');
var Director = require('./director.js')

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');

/* Exercise 7 - Add a Director to a Movie. (Implementing the API provided) */

ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak();