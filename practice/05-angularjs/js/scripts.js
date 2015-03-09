var appMovies=angular.module("appMovies",[]);

appMovies.controller("MoviesController",["$scope","$http",function($scope,$http){
	$scope.movies=[
        {
            "title":"Alien",
            "actor":"Sigourney Weaver",
            "director":"Ridley Scott",
            "type":"action"
            },
        {
            "title":"Boyhood",
            "actor":"Ethan Hawke",
            "director":"Richard Linklater",
            "type":"Drama"
            },
        {
            "title":"The Terminator",
            "actor":"Arnold Schwarzenegger",
            "director":"James Cameron",
            "type":"action"
            },
        {
            "title":"Star Wars",
            "actor":"Ewan McGregor",
            "director":"George Lucas",
            "type":"Science Fiction"
        }
    ];


    $scope.newField = {};

	$scope.delete = function (index) {
        $scope.movies.splice(index, 1);
    };

    
    $scope.add=function(event){
    	$scope.movies.push({title:$scope.new_movie,actor:$scope.new_actor,director:$scope.new_director,type:$scope.new_type});
        document.getElementById("myForm").reset();
    };
 

    $scope.edit = function(field) {
        $scope.editing = $scope.movies.indexOf(field);
        $scope.newField = angular.copy(field);
    };
    
    $scope.save = function(index) {
        if ($scope.editing !== false) {
            $scope.movies[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }       
    };
    
    $scope.cancel = function(index) {
        if ($scope.editing !== false) {
            $scope.movies[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }       
    };
 
}]);



