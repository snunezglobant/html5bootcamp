(function() {
  var app = angular.module('movieStore', []);

  app.controller('StoreController', function(){
    this.products = movies;
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

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });


  var movies = [{
      name: 'Inception',
      plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      rating: 8.8,
      director: "Christopher Nolan",
      genre: "Science Fiction",
      plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      year: "2010",
      critics: [{
        stars: 5,
        body: " ''I love this movie!'' ",
        author: "gonzalo@imanerdo.org",
       
      }, {
        stars: 1,
        body: " ''This movie sucks.''",
        author: "tim@imacritic.org",
        
      }]
    }, {
      name: 'The Dark Knight',
      rating: 9.0,
      director: "Christopher Nolan",
      genre: "Drama",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      year: "2008",
      critics: [{
        stars: 3,
        body: " ''I think was not only best Batman but best Nolan movie of all time.'' ",
        author: "gonzalo.roncedo08@gmail.com",
        
      }, {
        stars: 4,
        body: " ''An epic movie'' ",
        author: "someother@example.org",
        
      }]
    }, {
      name: "Waking Life",
      rating: "7.8",
      director: "Richard Linklater",
      genre: "Drama",
      plot: "A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.",
      year: "2001",
      critics: [{
        stars: 1,
        body: "'' A dark and useless movie...'' ",
        author: "turtleguyy@example.org",
        
      }, {
        stars: 5,
        body: "'' Best underground ever!''",
        author: "LouisW407@example.org",
       
      }, {
        stars: 1,
        body: "''Don't waste your time!''",
        author: "nat@example.org",
        
      }]
    }];
})();