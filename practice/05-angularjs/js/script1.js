var myApp = angular.module('myApp', []);

myApp.controller('MovieCtrl', ['$scope', function ($scope) {
  $scope.movies = [{title:'Gladiator', director:'Ridley Scott', year:'2000'},
  {title:'Birdman', director: 'Alejandro González Iñárritu', year:'2014'}];
}]);

