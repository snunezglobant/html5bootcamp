var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html'
  })
  .when('/details', {


    controller:'ClickToEditCtrl',
    templateUrl: 'views/details.html'
  })
  .when('/movielist', {

    controller:'ClickToEditCtrl',
    templateUrl: 'views/movielist.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

myApp.factory('Movies', function(){
  return [{title:'Gladiator', director:'Ridley Scott', year:'2000'},
  {title:'Birdman', director: 'Alejandro González Iñárritu', year:'2014'}];
});


myApp.controller('ClickToEditCtrl', function ($scope, Movies) {
  $scope.movies = Movies;
  $scope.editorEnabled = false;

  $scope.addMovie = function() {
    $scope.movies.push({title: $scope.newTitle || 'undefined', director: $scope.newDirector|| '--', year: $scope.newYear|| '--'});
    $scope.newTitle = '';
    $scope.newDirector = '';
    $scope.newYear = '';
  };
});