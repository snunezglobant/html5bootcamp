
function movieList($scope) {
  $scope.movies = [{title: 'Terminator', year:'1984' , marked: false},
  {title: 'Forrest Gump', year:'1995' , marked: false},
  {title: 'The human centipede', year:'2010' , marked: false},
  {title: 'The Good, the Bad and the Ugly', year:'1966' , marked: false},
  {title: 'The Shawshank Redemption', year:'1994', marked: false}];

  $scope.addMovie = function() {
    $scope.movies.push({title: $scope.textNewMovieTitle,year: $scope.textNewMovieYear, marked: false});
    $scope.textNewMovieTitle = '';
    $scope.textNewMovieYear = '';
  };

  $scope.deleteMovie = function() {
    var oldMovies = $scope.movies;
    $scope.movies = [];
    angular.forEach(oldMovies, function(movie) {
      if (!movie.marked) $scope.movies.push(movie);
    });
  };


}


function ClickToEditCtrl($scope) {
  $scope.title = $scope.movie.title;
  $scope.year = $scope.movie.year;
  $scope.editorEnabled = false;

  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitle = $scope.movie.title;
    $scope.editableYear = $scope.movie.year;
  };

  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };

  $scope.save = function() {
    $scope.movie.title = $scope.editableTitle;
    $scope.movie.year = $scope.editableYear;
    $scope.disableEditor();
  };
}
