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
      name: 'Man Of Steel',
      description: "Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction.",
      director: 'Christopher Nolan',
      year: 2013,
      genre: 'Cience fiction',
      
      
    }, {
      name: 'Batman',
      description: "Batman is a 1989 American superhero film directed by Tim Burton and produced by Jon Peters, based on the DC Comics character of the same name. It is the first installment of Warner Bros.' initial Batman film series. The film stars Jack Nicholson, Michael Keaton in the title role, Kim Basinger, Robert Wuhl, Pat Hingle, Billy Dee Williams, Michael Gough, and Jack Palance. In the film, Batman deals with the rise of a costumed criminal known as The Joker",
      director: 'Tim Burton',
      year: 1989,
      genre: 'Cience Fiction',
     
    }, {
      name: 'The theory of everything',
      description: "The Theory of Everything is a 2014 British biographical coming of age romantic drama film directed by James Marsh and adapted by Anthony McCarten from the memoir Travelling to Infinity: My Life with Stephen by Jane Wilde Hawking, which deals with her relationship with her ex-husband, theoretical physicist Stephen Hawking, his diagnosis of motor neuron disease, and his success in physics",
      director:'Steven Spielberg',
      year: 2014,
      genre: 'Biography',
     
    }];
})();