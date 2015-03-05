$ = require('./jquery-bundle');
var Movie = require('./Movie');
var Director = require('./Director');
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'
