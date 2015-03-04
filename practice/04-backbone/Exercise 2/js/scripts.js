
$('document').ready(function(){

var source = $('#handtest').html();
var template = Handlebars.compile(source);

var data ={
  movies: [
    {title: "The Terminator", year: "1987"},
    {title: "Star Wars episode III", year: "2005"},
    {title: "Alien", year: "1979"},
    {title: "Star Trek Into Darkness", year: "2013"},
    {title: "The Simpsons Movie", year: "2007"},
    {title: "A nightmare on elm street", year: "1984"},
    {title: "King Kong", year: "2005"},
    {title: "The Phantom", year: "1996"},
    {title: "Mortal Kombat", year: "1995"},
    {title: "The conjuring", year: "2013"},
  ]
};

Handlebars.registerHelper('list', function(items, options) {
  var out = "<ol>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ol>";
});
var html = template(data);
 
$('#content').html(html);


});
