movieApp.factory("moviesService", function($http){
    var _movies = [];

    var _getMovies = function(){
        $http.get("/js/data/movies.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _movies); 
            }, function(results){
                //Error
            })
    }

    var _addNewMovie = function(movie){
        _movies.splice(0, 0, movie);
    }

    return{
        movies: _movies,
        getMovies: _getMovies,
        addNewMovie: _addNewMovie
    };
});



