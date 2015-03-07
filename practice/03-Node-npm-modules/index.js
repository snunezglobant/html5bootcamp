var movie = require("./movie.js");


var harry = new movie();

harry.set('title','Harry Potter 1');
harry.set('duration','160min');


var director = require("./director.js");

var harrydir =  new director();
harrydir.set('name','Chris Columbus');
harrydir.set('quotes',['Hola como estas', 'Todo bien y vos']);
harry.set('director',harrydir);

harry.getDirector().speak();
