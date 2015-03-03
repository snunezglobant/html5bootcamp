var moviesApp = angular.module('moviesApp', ['ngRoute']);

/* ngRoute */
moviesApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when('/list', {
      templateUrl: 'templates/movie-list.html'
    }).
    when('/details/:movieId', {
      templateUrl: 'templates/movie-details.html'
    }).
    otherwise({
      redirectTo: '/list'
    });
}]);

/* 1) Create a movie listing with your favorite movies. Data shall be persisted in localhost. */
moviesApp.controller('MovieListCtrl', ['$scope', '$location', 'MovieStorage', function($scope, $location, MovieStorage) {
  $scope.movieList = MovieStorage.loadMovies();

  $scope.showDetails = function(item) {
    $location.path('/details/' + item.guid);
  }

  $scope.editBtnClick = function(item) {
    console.log(item);
  }

  $scope.removeItem = function(index, item) {
    $scope.movieList.splice(index, 1);
    MovieStorage.remove(item);
  }

  $scope.mouseenter = function(index) {
    // todo remove jquery
    $('.movie-item:nth-child(' + (index + 1) + ') .toolbox').addClass('visible');
  }

  $scope.mouseleave = function(index) {
    // todo remove jquery
    $('.movie-item:nth-child(' + (index + 1) + ') .toolbox').removeClass('visible');
  }
}]);

moviesApp.controller('MovieDetailsCtrl', ['$scope', '$routeParams', 'MovieStorage', function($scope, $routeParams, MovieStorage){
  $scope.movie = MovieStorage.loadMovie($routeParams.movieId);
}]);

/* localStorage persistance */
moviesApp.service('MovieStorage', ['$http', 'guid', function($http, guid) {
  var listPrefix = 'moviesApp-movie-';

  this.loadMovies = function() {
    var jsonIndex = localStorage.getItem(listPrefix + 'index');
    var index = jsonIndex ? JSON.parse(jsonIndex) : [];
    var items = [];

    if (!index.length) {
      items = this.loadExampleMovieList();
    }
    else {
      for (var i = 0; i < index.length; i++) {
        items.push(JSON.parse(localStorage.getItem(listPrefix + index[i])));
      }
    }

    return items;
  }

  this.loadMovie = function(guid) {
    return JSON.parse(localStorage.getItem(listPrefix + guid));
  }

  this.save = function(item) {
    var jsonIndex = localStorage.getItem(listPrefix + 'index');
    var index = jsonIndex ? JSON.parse(jsonIndex) : [];

    index.push(item.guid);
    localStorage.setItem(listPrefix + 'index', JSON.stringify(index));
    localStorage.setItem(listPrefix + item.guid, angular.toJson(item)); //JSON.stringify(item)
  }

  this.remove = function(item) {
    var index = JSON.parse(localStorage.getItem(listPrefix + 'index'));

    index.splice(index.indexOf(item.guid), 1);
    localStorage.setItem(listPrefix + 'index', JSON.stringify(index));
    localStorage.removeItem(listPrefix + item.guid);
  }

  this.loadExampleMovieList = function() {
    var items = [];
    var self = this;

    $http.get('exampleMovieList.json', {responseType: 'json'})
      .success(function(data, status, headers, config) {
        for (var i = 0; i < data.length; i++) {
          items[i] = data[i];
          items[i].guid = guid.newGuid();
          self.save(items[i]);
        }
      });

    // returns [] but the success callback keeps the reference, and updates it when data is available
    return items;
  }
}]);

moviesApp.service('guid', function() {
  this.newGuid = function() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function() {
      return Math.floor(Math.random()*16).toString(16);
    });
  }
});
