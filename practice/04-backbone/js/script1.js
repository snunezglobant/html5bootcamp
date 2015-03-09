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
