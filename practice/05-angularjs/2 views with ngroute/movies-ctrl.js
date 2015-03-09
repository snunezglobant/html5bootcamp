angular.module('miAp', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
      .when('/', {
       // controller: 'ControladorMovies'
        templateUrl: 'inicio.html',
        
      })
      .when('/list', {
        controller: 'ControladorMovies',
        templateUrl: 'list.html'
      })
      .when('/details', {
     controller: 'ControladorMoviesDetails',
        templateUrl: 'details.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })


.factory('Movies', function(){

return [{title: 'Terminator', year:'1984' , marked: false},
  {title: 'Forrest Gump', year:'1995' , marked: false},
  {title: 'The human centipede', year:'2010' , marked: false},
  {title: 'The Good, the Bad and the Ugly', year:'1966' , marked: false},
  {title: 'The Shawshank Redemption', year:'1994', marked: false}];


})


.controller('ControladorMovies', function($scope, Movies){

  $scope.movies = Movies;


  $scope.deleteMovie = function() {
    var oldMovies = $scope.movies;
    $scope.movies = [];
    angular.forEach(oldMovies, function(movie) {
      if (!movie.marked) $scope.movies.push(movie);
    });
  };

})


.controller('ControladorMoviesDetails', function($scope, Movies){

 $scope.movies = Movies;
 $scope.editorEnabled = false;

 $scope.addMovie = function() {
    $scope.movies.push({title: $scope.textNewMovieTitle,year: $scope.textNewMovieYear, marked: false});
    $scope.textNewMovieTitle = '';
    $scope.textNewMovieYear = '';
  };



})

