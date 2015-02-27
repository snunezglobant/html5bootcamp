function Actor(name, sirname){
	this.name=name;
	this.sirname=sirname;
}

var actor1= new Actor("name1","sirname1");
var actor2= new Actor("name2","sirname2");
var actor3= new Actor("name3","sirname3");

function Movie(name){
	this.title=name;
	this.cast="";
}

var arr=[];
Movie.prototype.setCast= function(){
	for (var i = 0,a; i < arguments.length; i++) {
		arr.push(arguments[i])
	};
	this.cast=arr;
}

var movie1 = new Movie("Iron Man");
movie1.setCast(actor1,actor2,actor3);
//  movie1.setCast(['Robert Downey Jr.', 'Jeff Bridges', 'Gwyneth Paltrow']);
