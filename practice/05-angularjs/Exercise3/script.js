var aplicacion = angular.module('aplication', []);
aplicacion.controller('Movies', function($scope) {
   $scope._id = null;
   $scope.name = '';
   $scope.desc = ''
   $scope.year = '';
   $scope.director = '';
   $scope.genre = '';
   $scope.movies = [];
   $scope.saveMovie = function() {
      if ($scope._id == null) {
         $scope.movies.push({
            name: $scope.name,
            desc: $scope.desc,
            year: $scope.year,
            director: $scope.director,
            genre: $scope.genre
         }); 
      } else {
         $scope.movies[$scope._id] = {
            name: $scope.name,
            desc: $scope.desc,
            year: $scope.year,
            director: $scope.director,
            genre: $scope.genre
         };
      }
      $scope.cleanData();
   }
   $scope.backMovies = function(index) {
      $scope._id = index;
      $scope.name = $scope.movies[index].name;
      $scope.desc = $scope.movies[index].desc;
      $scope.year = $scope.movies[index].year;
      $scope.director = $scope.movies[index].director;
      $scope.genre = $scope.movies[index].genre;
   };
   $scope.remuveMovies = function(index) {
      var movies_update = [];
      for (var i = 0; i < $scope.movies.length; i++) {
         if (i != index) {
            movies_update.push($scope.movies[i]);
         }
      }
      $scope.movies = movies_update;
   };
   $scope.cleanData = function() {
      $scope._id = null;
      $scope.name = '';
      $scope.desc = '';
      $scope.year = '';
      $scope.director = '';
      $scope.genre = '';
   };
});