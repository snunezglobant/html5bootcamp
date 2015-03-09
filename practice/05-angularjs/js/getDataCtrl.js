var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.movies = '';
        $scope.editing = false;

        $http.get('data/movies.json')
                .success(function (data, status, headers, config) {
                    $scope.movies = data.movies;
                    console.log("Request successful");
                    //console.log(data.movies);
                    console.log(data.movies.length);
                })
                .error(function (data, status, headers, config) {
                    console.log("There was an error getting the data"),
                            console.log(data, status, headers, config);
                });

        $scope.movies.remove = function (index) {
            $scope.movies.splice(index, 1);
            console.log("trying to remove...");
        };

        $scope.editMovie = function (field) {
            $scope.editing = $scope.movies.id.indexOf(field);
            $scope.newField = angular.copy(field);
        };
    }]);