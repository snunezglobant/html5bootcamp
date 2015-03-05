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
    when('/edit/:movieId', {
      templateUrl: 'templates/movie-edit.html'
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

  $scope.addItem = function() {
    $location.path('/edit/new');
  }

  $scope.editItem = function(item) {
    $location.path('/edit/' + item.guid);
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


/* localStorage persistance */
moviesApp.service('MovieStorage', ['$http', 'Movie', function($http, Movie) {
  var listPrefix = 'moviesApp-movie-';

  this.newMovie = function() {
    return new Movie();
  }

  this.save = function(item) {
    var jsonIndex = localStorage.getItem(listPrefix + 'index');
    var index = jsonIndex ? JSON.parse(jsonIndex) : [];

    if (!localStorage.getItem(listPrefix + item.guid)) {
      index.push(item.guid);
      localStorage.setItem(listPrefix + 'index', JSON.stringify(index));
    }

    localStorage.setItem(listPrefix + item.guid, angular.toJson(item)); //JSON.stringify(item)
  }

  this.remove = function(item) {
    var index = JSON.parse(localStorage.getItem(listPrefix + 'index'));

    index.splice(index.indexOf(item.guid), 1);
    localStorage.setItem(listPrefix + 'index', JSON.stringify(index));
    localStorage.removeItem(listPrefix + item.guid);
  }

  this.loadMovie = function(guid) {
    return JSON.parse(localStorage.getItem(listPrefix + guid));
  }

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

  this.loadExampleMovieList = function() {
    var items = [];
    var self = this;

    $http.get('exampleMovieList.json', {responseType: 'json'})
      .success(function(data, status, headers, config) {
        for (var i = 0; i < data.length; i++) {
          items[i] = new Movie();

          for (var attr in data[i]) {
            items[i][attr] = data[i][attr];
          }
          self.save(items[i]);

          console.log(items[i]);
        }
      });

    // returns [] but the success callback keeps the reference, and updates it when data is available
    return items;
  }
}]);

moviesApp.service('GUID', function() {
  this.newGuid = function() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function() {
      return Math.floor(Math.random()*16).toString(16);
    });
  }
});

moviesApp.factory('Movie', ['GUID', function(GUID) {
  function Movie() {
    this.title = '';
    this.imageUrl = '';
    this.year = '';
    this.genres = [''];
    this.directors = [{
      name: '',
      url: ''
    }];
    this.stars = [{
      name: '',
      url: ''
    }];
    this.plot = '';

    this.guid = GUID.newGuid();
  }

  return Movie;
}]);


/* 2) Show movie details in a separate details view. */
moviesApp.controller('MovieDetailsCtrl', ['$scope', '$routeParams', '$location', 'MovieStorage', function($scope, $routeParams, $location, MovieStorage) {
  $scope.movie = MovieStorage.loadMovie($routeParams.movieId);

  $scope.back = function() {
    $location.path('/list');
  }
}]);


/* 3) Allow to add / edit / remove movies from the list. */
moviesApp.controller('MovieEditCtrl', ['$scope', '$routeParams', '$location', 'MovieStorage', function($scope, $routeParams, $location, MovieStorage) {
  if ($routeParams.movieId === 'new') {
    $scope.movie = MovieStorage.newMovie();
  }
  else {
    $scope.movie = MovieStorage.loadMovie($routeParams.movieId);
  }

  $scope.addGenre = function() {
    $scope.movie.genres.push('');
  }

  $scope.addPerson = function(scope) {
    scope.push({
      name: '',
      url: ''
    });
  }

  $scope.removeItem = function(scope, index) {
    scope.splice(index, 1);
  }

  $scope.save = function() {
    MovieStorage.save($scope.movie);
    $location.path('/list');
  }

  $scope.cancel = function() {
    $location.path('/list');
  }
}]);
