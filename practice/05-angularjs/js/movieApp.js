var movieApp = angular.module("movieApp", []);

//Routing
movieApp.config(function($routeProvider){
    console.log($routeProvider);
    $routeProvider
        .when("/",{
            controller: "MoviesCtrl",
            templateUrl: "js/views/moviesView.html"
        });

    $routeProvider.otherwise({"redirectTo": "/"});  
});