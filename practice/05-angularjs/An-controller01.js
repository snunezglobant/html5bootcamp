var app = angular.module('MyApp', ['ngRoute', 'ngResource']);
app.controller("TheController", ["$scope", function(m) {
    m.newMovie = {};
    m.movies = [{
        title: "Harry Potter",
        duration: "160min"
    }, {
        title: "Terminator",
        duration: "120min"
    }];
    m.addMovie = function() {
        m.movies.push(m.newMovie);
        m.newMovie = {};
    }
    m.deleteMovie = function(index) {
        m.movies.splice(index, 1);
    };
}]);