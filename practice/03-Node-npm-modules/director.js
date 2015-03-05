var Movie = require('./movie.js');
var Director = function(name) {
    this.name = name;
    this._data = {};
    this.set = function(clave, valor) {
        this._data[clave] = valor;
    };
    this.get = function(clave) {
        return this._data[clave]
    };
    this.speak = function() {
        var quotes = this._data['quotes']
        if (quotes) {
            quotes.forEach(function(quote) {
                console.log(quote)
            });
        } else {
            console.log("damn it!! " + " I'm " + this.name + " and I'm so shy")
        };
    }
}
var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak() //riddley´s phrases





