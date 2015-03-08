$(function(){
	var source = $("#movie-template").html();
	var template = Handlebars.compile(source);
	var context = { movies: [
	 	{title:'Rocky',year:'1990',description:'Movie of Rocky life', genre:'Action'},
	 	{title:'Alien',year:'1979',description:'A scary movie',genre: 'Horror, Sci-Fi'},
	 	{title:'Predestination',year:'1990',description:'The life of a time-traveling Temporal Agent.', genre:'Drama, Mystery, Sci-Fi, Thriller'},
	 	{title:'Birdman',year:'2014',description:'A film about Birdman', genre:'Drama, Comedy'}
 	]};	
 
 	var html = template(context);
 	$("#movie").html(html);
});

$(function(){
	var source = $("#movie-list-template").html();
	var template = Handlebars.compile(source);
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
