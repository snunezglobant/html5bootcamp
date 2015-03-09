var app = angular.module('app', ['LocalStorageModule']);
app.controller('Movies', function($scope, localStorageService) {
    $scope._id = null;
    $scope.title = '';
    $scope.director = '';
    $scope.description = '';
    if (localStorageService.get("allmovies")) {
        $scope.movies = localStorageService.get("allmovies");
    } else {
        $scope.movies = [];
    };
    $scope.$watchCollection('movies', function(newValue, oldValue) {
        localStorageService.set("allmovies", $scope.movies);
    });
    $scope.saveMovie = function() {
        if ($scope._id == null) {
            $scope.movies.push({
                title: $scope.title,
                director: $scope.director,
                description: $scope.description
            });
        } else {
            $scope.movies[$scope._id] = {
                title: $scope.title,
                director: $scope.director,
                description: $scope.description

            };
        }
        $scope.limpiarDatos();
    }
    $scope.recMovie = function(index) {
        $scope._id = index;
        $scope.title = $scope.movies[index].title;
        $scope.director = $scope.movies[index].director;
        $scope.description = $scope.movies[index].description;
    };

    $scope.delete = function(index) {
        $scope.movies.splice(index, 1);

    };
    $scope.cleanData = function() {
        $scope._id = null;
        $scope.title = '';
        $scope.director = '';
        $scope.description = '';

    };
});