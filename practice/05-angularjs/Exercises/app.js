var app = angular.module('movies', [ ]);

app.controller('MovieCtrl', ['$scope', function($scope) {
	// Controller magic!
	$scope.movies = {};

	$scope.movies.details = [{
		/* Movies JSON */
		"name": "Inception",
		"year": "2010",
		"director": "Christopher Nolan"
	},{
		"name": "Interstellar",
		"year": "2014",
		"director": "Christopher Nolan"
	},{
		"name": "Face Off",
		"year": "1997",
		"director": "John Woo"
	},{
		"name": "Shutter Island",
		"year": "2010",
		"director": "Martin Scorsese"		
	}];

	$scope.deleteMovie = function (index) {
		$scope.movies.details.splice(index, 1)
	};
}]);