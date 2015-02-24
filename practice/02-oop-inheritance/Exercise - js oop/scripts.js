/***EXERCISE 1***/
var Movie= function(){
	this.play=play;
	this.stop=stop;
	this.set=set;
}

var play=function(){
	console.log(this.title+" is Playing");
}

var stop=function(){
	console.log(this.title+" Stopped");
}

var set=function(title){
	this.title=title;
}

/***EXERCISE 2***/
var ironMan=new Movie();
ironMan.set('Iron Man');
console.log(ironMan.title);
ironMan.play();
ironMan.stop();

var starWars=new Movie();
starWars.set('Star Wars');
starWars.play();
starWars.stop();


/***EXERCISE 3***/

