(function() {

var Movie = Backbone.Model.extend({
  	defaults:{
    id: undefined,
  	name :'',
		rating : undefined,
		director: '', 
		genre:'',
    plot: '',
    year: undefined
  	}
});
     

var MoviesList = Backbone.Collection.extend({
   localStorage: new Backbone.LocalStorage("MoviesList"),
    model: Movie,
     initialize: function(){
        console.log("New collection created");
        this.on('add',function(model,col){
          console.log('Added '+model.get('name')+' at index '+ col.indexOf(model));
        });
        this.on('change', function(model){
            console.log("Collection "+model.get('name')+" changed");
        });
        this.on('remove', function(model){
            console.log('Removed '+model.get('name'));
        });
    },
});

var inception = new Movie({
    id:1,
    name: 'Inception',
    rating: 8.8,
    director: "Christopher Nolan",
    genre: "Science Fiction",
    plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    year: 2010
});

var tdk = new Movie({
    id:2,
    name: 'The Dark Knight',
    rating: 9.0,
    director: "Christopher Nolan",
    genre: "Drama",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    year: 2008
});

var waking = new Movie({
    id:3,
    name: 'Waking Life',
    rating: 7.8,
    director: "Richard Linklater",
    genre: "Drama",
    plot: "A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.",
    year: 2001
});

var list = new MoviesList();



list.add([inception,tdk,waking]);

list.remove([tdk]);

list.add([tdk]);

console.log(JSON.stringify(list));

list.forEach(function(model){
  console.log(model.get('name'));
});
/*list.fetch({
    success: function(){
        console.log("Got data");
    },
    error: function(collection, response){
        console.log("An error ocurred during fetch");
        console.log(response);
    }
});*/

//SOME MOVIES VIEW

var MoviesView = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
       list.each(function(movie){
          var movieView = new MovieView({ model: movie });
          this.$el.append(movieView.el); // calling render method manually..
      }, this);
      return this; // returning this for chaining..
  }
});


//A SINGLE MOVIE VIEW

var MovieView = Backbone.View.extend({
   tagName: 'li',
   initialize: function(){
     this.render();
   },

   render: function(){
    this.$el.html("<p id='movie'>"+this.model.get('name')+"</p><p id='rating'> Rating: "+ this.model.get('rating')+"</p> <p> Director: "+this.model.get('director')+"</p> <p> Genre: "+this.model.get('genre')+"</p> <p> Plot: "+this.model.get('plot')+"</p> <p> Year: "+this.model.get('year')+"<hr>");       
  }
});


var moviesView = new MoviesView({ collection: list });
$(document.body).append(moviesView.render().el); 
})();