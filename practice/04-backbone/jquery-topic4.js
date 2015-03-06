$(document).ready(function()
{


$(function(){
 var source= $("#movie-template").html();
 var template= Handlebars.compile(source);
 var context = {
  name: "Rocky",
  year: "1990",
  description: "Movie of Rocky life",
  genre: "Action"
 };
 
 var html = template(context);
 $("#movie").html(html);

});




$(function(){
 var source= $("#movie-list-template").html();
 var template= Handlebars.compile(source);
 var context = {
 	
  movies: [
    {title: "\"Terminator\"", year: "1984"},
    {title: "\"Forrest Gump\"", year: "1994"},
    {title: "\"The Shawshank Redemption\"", year: "1995"}
  ]


};

Handlebars.registerHelper('list', function(movies, options) {
  var out = "<ul>";

  for(var i=0, l=movies.length; i<l; i++) {
    out = out + "<li>" + options.fn(movies[i]) + "</li>";
  }

  return out + "</ul>";
});



var html = template(context);
 $("#movielist").html(html);


});



var Movie = Backbone.Model.extend(
{
 defaults: function() {
  return {
   titulo:"",
   year:"",
  }
 }
});

var MovieList = Backbone.Collection.extend({
 model: Movie
});

var rocky= new Movie({titulo:"Rocky", year:"1990"});
console.log(rocky);
var terminator = new Movie({titulo:"terminator the movie",year:"1995" });
console.log(terminator)
var birdMan = new Movie({titulo:"birdMan", year: "2015"});

var movielist = new MovieList([rocky,terminator,birdMan]);
console.log(movielist);
console.log(movielist.toJSON());






});