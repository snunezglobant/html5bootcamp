$(document).ready(function(){
	var Movie = Backbone.Model.extend({
		defaults: function() {
			return {
				title: '',
				year: ''
			}
		}
	});

	var MoviesList = Backbone.Collection.extend({
		model: Movie
	});

	var rocky = new Movie({title:"Rocky", year:"1990"});
	//console.log(rocky);
	var terminator = new Movie({title:"terminator the movie",year:"1995" });
	//console.log(terminator)
	var birdMan = new Movie({title:"birdMan", year: "2015"});
	//console.log(birdMan);
	var movielist = new MoviesList([rocky,terminator,birdMan]);
	console.log(movielist);
	console.log(movielist.toJSON()); // Return all the objects of movielist*/
});
