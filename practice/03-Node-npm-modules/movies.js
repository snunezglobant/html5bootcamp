(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
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

        alien.get('director').speak() // las frases de ridley
    }, {
        "./movie.js": 2
    }],
    2: [function(require, module, exports) {
        var Movie = function() {
            this._data = {};
            this.set = function(mkey, mvalue) {
                this._data[mkey] = mvalue;
            };
            this.get = function(mkey) {
                return this._data[mkey]
            };
        }
        module.exports = Movie;
    }, {}]
}, {}, [1]);
