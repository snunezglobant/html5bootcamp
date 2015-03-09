var app = angular.module('movies', []);

app.controller('MovieList', ['$scope', function($scope) { 
	$scope.movies = [];
	
	$scope.addMovie = function() {
		$scope.movies.push({
			"title": $scope.title, 
			"year": $scope.year,
			"director": $scope.director
		})		
	};

	$scope.removeMovie = function( index ) {
		$scope.movies.splice(index, 1);
	};
}]);