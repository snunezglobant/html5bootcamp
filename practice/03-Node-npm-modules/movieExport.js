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