(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s
})({1: [function (require, module, exports) {
            /*****************/
            /*  Excercise 4  */
            module.exports = function (name) {
                return{
                    getName: function () {
                        return name;
                    },
                    setname: function (newName) {
                        name = newName;
                    }
                };
            };
        }, {}], 2: [function (require, module, exports) {
            /*****************/
            /*  Excercise 3  */
            /*
             * Export using:
             * var m = (require('/path/to/movieExport.js'))
             *              (String: name, String: genre, String: year, String: dirName);
             */
            var directorConstructor = require('./director');
            module.exports = function (movieName, movieGenre, movieYear, directorName) {
                return{
                    attributes: {
                        name: movieName,
                        genre: movieGenre,
                        year: movieYear,
                        playing: false,
                        director: directorConstructor(directorName)
                    },
                    play: function () {
                        if (this.attributes.playing)
                            console.log("Already playing " + this.attributes.name);
                        else {
                            console.log("Now I'm seeing " + this.attributes.name);
                            this.attributes.playing = true;
                        }
                    },
                    stop: function () {
                        if (!this.attributes.playing)
                            console.log(this.attributes.name + " it's already stopped");
                        else {
                            console.log("Enough of " + this.attributes.name);
                            this.attributes.playing = false;
                        }
                    },
                    setName: function (newName) {
                        this.attributes.name = newName;
                    },
                    setGenre: function (newGenre) {
                        this.attributes.genre = newGenre;
                    },
                    setYear: function (newYear) {
                        this.attributes.year = newYear;
                    },
                    getName: function () {
                        return this.attributes.name;
                    },
                    getGenre: function () {
                        return this.attributes.genre;
                    },
                    getYear: function () {
                        return this.attributes.year;
                    }
                };
            };
        }, {"./director": 1}]}, {}, [2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2FwZWRyYXphL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRpcmVjdG9yLmpzIiwibW92aWVFeHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKioqKioqKioqKioqKioqKiovXG4vKiAgRXhjZXJjaXNlIDQgICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybntcbiAgICAgICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXRuYW1lOiBmdW5jdGlvbihuZXdOYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiLyoqKioqKioqKioqKioqKioqL1xyXG4vKiAgRXhjZXJjaXNlIDMgICovXHJcbi8qXHJcbiAqIEV4cG9ydCB1c2luZzpcclxuICogdmFyIG0gPSAocmVxdWlyZSgnL3BhdGgvdG8vbW92aWVFeHBvcnQuanMnKSlcclxuICogICAgICAgICAgICAgIChTdHJpbmc6IG5hbWUsIFN0cmluZzogZ2VucmUsIFN0cmluZzogeWVhciwgU3RyaW5nOiBkaXJOYW1lKTtcclxuICovXHJcbnZhciBkaXJlY3RvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9kaXJlY3RvcicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb3ZpZU5hbWUsIG1vdmllR2VucmUsIG1vdmllWWVhciwgZGlyZWN0b3JOYW1lKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBuYW1lOiBtb3ZpZU5hbWUsXHJcbiAgICAgICAgICAgIGdlbnJlOiBtb3ZpZUdlbnJlLFxyXG4gICAgICAgICAgICB5ZWFyOiBtb3ZpZVllYXIsXHJcbiAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXJlY3RvcjogZGlyZWN0b3JDb25zdHJ1Y3RvcihkaXJlY3Rvck5hbWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMucGxheWluZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBwbGF5aW5nIFwiICsgdGhpcy5hdHRyaWJ1dGVzLm5hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm93IEknbSBzZWVpbmcgXCIgKyB0aGlzLmF0dHJpYnV0ZXMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZXMucGxheWluZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXR0cmlidXRlcy5uYW1lICsgXCIgaXQncyBhbHJlYWR5IHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbm91Z2ggb2YgXCIgKyB0aGlzLmF0dHJpYnV0ZXMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROYW1lOiBmdW5jdGlvbiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRHZW5yZTogZnVuY3Rpb24gKG5ld0dlbnJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5nZW5yZSA9IG5ld0dlbnJlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0WWVhcjogZnVuY3Rpb24gKG5ld1llYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnllYXIgPSBuZXdZZWFyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TmFtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLm5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRHZW5yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdlbnJlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0WWVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnllYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiXX0=
