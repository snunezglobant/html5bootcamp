
movieApp.controller("MoviesCtrl", function ($scope, moviesService){
  $scope.movies = moviesService.movies;
   moviesService.getMovies();

    $scope.addNewMovie = function(movieName){
        var movie = {name: movieName};
        moviesService.addNewMovie(movie);
    }
});



