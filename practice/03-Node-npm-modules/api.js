var Movie = require('./movieExport');
var Director = require('./director');

var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', 'I am Ridley Scott');
ridleyScott.set('quotes', 'Do what you have to do');
ridleyScott.set('quotes', ['Cast is everything', 'Do it now']);
/*console.log(ridleyScott);
ridleyScott.speak();*/

var alien = new Movie();
console.log(alien);
alien.set('director', ridleyScott);
console.log(alien);
alien.set('name', 'Alien');
alien.set('genre', 'Suspense/Terror');
alien.set('year', 1990);
alien.set('something', 'something');
alien.get('director').speak();