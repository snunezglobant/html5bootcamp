 //movie objet
 var Movie = function(){
  this.attribute={
    "title":"",
    "actors":""
  }
}
Movie.prototype.play=function(){
	console.log("Playing "+this.attribute["title"]);
}
Movie.prototype.stop=function(){
	console.log("Stopping "+this.attribute["title"]);
}
Movie.prototype.set=function(attr,value){
	this.attribute[attr]=value;

}
Movie.prototype.get=function(){
	console.log(this.attribute["title"]);
  console.log(this.attribute["actors"]);
}
//Social
 var Social={
  share:function(person){
   console.log("Sharing"+" "+this.attributes['title']+" with "+person);
  },
  like:function(){
        console.log("I like this movie ");
    }
 }
//mixing
 $.extend(true,Movie.prototype,Social);
/***ACTORS***/
var Actors=function(name){
 this.name=name;
}
var actor1 = new Actors('Arnold Schwarzenegger');
var actor2 = new Actors('Jude Law');

/***SET IN CLASS MOVIE THE ARRAY OF ACTORS***/

var Terminator = new Movie();
Terminator.set("title","Terminator the movie")
Terminator.set('actors',[actor1,actor2]);
