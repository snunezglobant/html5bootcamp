var aplicacion = angular.module('aplication' ,['LocalStorageModule']);
var valName=document.getElementById("onlythis");
aplicacion.controller('Movies', function($scope) {
   $scope._id = null;
   $scope.name = '';
   $scope.desc = ''
   $scope.year = '';
   $scope.director = '';
   $scope.genre = '';
   $scope.movies = [{
      id:1,
      name: 'Inception',
      plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      rating: 8.8,
      director: "Christopher Nolan",
      genre: "Science Fiction",
      year: "2010"
      }, 
      {
      id:2,   
      name: 'The Dark Knight',
      rating: 9.0,
      director: "Christopher Nolan",
      genre: "Drama",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      year: "2008"
      },
      {
      id:3,  
      name: "Waking Life",
      rating: "7.8",
      director: "Richard Linklater",
      genre: "Drama",
      plot: "A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.",
      year: "2001"
   }];

   



   $scope.saveMovie = function() {
      if(valName.value!=null){
         if ($scope._id == null) {
            $scope.movies.push({
               name: $scope.name,
               desc: $scope.desc,
               year: $scope.year,
               director: $scope.director,
               genre: $scope.genre
            }); 
         } else {
            $scope.movies[$scope._id] = {
               name: $scope.name,
               desc: $scope.desc,
               year: $scope.year,
               director: $scope.director,
               genre: $scope.genre
            };
         }
         $scope.cleanData();
      }
   }
   $scope.backMovies = function(index) {
      $scope._id = index;
      $scope.name = $scope.movies[index].name;
      $scope.desc = $scope.movies[index].desc;
      $scope.year = $scope.movies[index].year;
      $scope.director = $scope.movies[index].director;
      $scope.genre = $scope.movies[index].genre;
   };
   $scope.removeMovies = function(index) {
      var movies_update = [];
      for (var i = 0; i < $scope.movies.length; i++) {
         if (i != index) {
            movies_update.push($scope.movies[i]);
         }
      }
      $scope.movies = movies_update;
   };
   $scope.cleanData = function() {
      $scope._id = null;
      $scope.name = '';
      $scope.desc = '';
      $scope.year = '';
      $scope.director = '';
      $scope.genre = '';
      document.getElementById("onlythis").focus();
   };
});

app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
});



if(localStorageService.get("name")){
      $scope.todo= localStorageService.get("name");
   }
   else{
      $scope.movies=[{}];
   }
   
   $scope.$watchCollection('name', function(newValue,oldValue){
      localStorageService.set("name", $scope.movies);
   });