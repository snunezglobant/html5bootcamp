var myApp = angular.module('myApp', []);

myApp.controller('MovieCtrl', ['$scope', function ($scope) {
  $scope.movies = [{title:'Gladiator', selected:true },
  {title:'Birdman', selected: false}];

  $scope.addMovie = function() {
    $scope.movies.push({title : $scope.newMovie, selected: false});
    $scope.newMovie = '';
  };

  $scope.deleteMovie = function(){
    var oldMovies = $scope.movies;
    $scope.movies = [];
    angular.forEach(oldMovies, function(movie){
      if(!movie.selected) {
        $scope.movies.push(movie);
      }
    }); 
  };
}]);

myApp.controller('ClickToEditCtrl', ['$scope', function ($scope) {
  $scope.title = $scope.movie.title;

  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitle = $scope.movie.title;
  };

  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };

  $scope.save = function() {
    $scope.movie.title = $scope.editableTitle;
    $scope.disableEditor();
  };
}]);

