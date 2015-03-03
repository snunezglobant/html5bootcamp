
var Movie = Backbone.Model.extend({
  defaults: {
      name : '',
      rating : '',
      director: '', 
      genre:'',
      plot: '',
      year: ''
  }
});

var movie1=new Movie("Inception","8.8","Christopher Nolan","Science Fiction","A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'","2010");
var movie2=new Movie("The Dark Knight","9.0","Christopher Nolan","Drama","When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.","2008");
var movie3=new Movie("Waking Life","7.8","Richard Linklater","Drama","'A man shuffles through a dream meeting various people and discussing the meanings and purposes of the universe.'","2001");
var myCollection= new Set([movie1,movie2,movie3]);
console.log(myCollection.models);


var MovieView = Backbone.View.extend({
   tagName: 'li',

   initialize: function(){
     this.render();
   },

   render: function(){
     this.$el.html( this.model.get('name'));
  }
});

var Set = Backbone.Collection.extend({
        model: Movie
});


var view1=new MovieView({Collection: myCollection});

$(document.body).html(myCollection.render());