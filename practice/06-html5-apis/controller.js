var app = angular.module('Listnames', ['LocalStorageModule', 'ngRoute', 'ngResource']);
app.controller("namesController", function($scope, localStorageService) {
    if (localStorageService.get("nameslist")) {
        $scope.names = localStorageService.get("nameslist");
    } else {
        $scope.names = [];
    };
    $scope.$watchCollection('names', function(newValue, oldValue) {
        localStorageService.set("nameslist", $scope.names);
    });
    $scope.addname = function() {
        $scope.names.push($scope.newName);
        $scope.newName = {};

    };
});