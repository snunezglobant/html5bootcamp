$(document).ready(function()
{

var Movie= function(){

	this.attributes={
		'title':'',
		'year':'',
	};
	this.actr=new Actor();
}

Movie.prototype.set=function(attr,value){
			this.attributes[attr]=value;
		}
Movie.prototype.setAct=function(actor){
			this.actr.setA(actor);
		}		
Movie.prototype.get=function(attr){
			return this.attributes[attr];
		}
Movie.prototype.getAct=function(){
			 this.actr.getA();
}
Movie.prototype.playMovie=function(){
			console.log("Playing "+this.attributes['title']+"...\n");
		}
Movie.prototype.stopMovie=function(){
			console.log(this.attributes['title']+" "+"Stopped.");
		}
Movie.prototype.downloadableMovie=function(){
			console.log(this.attributes['title']+" "+"Downloading");
		}

var Social=function () {
 	 this.share = function(value) {
   var name = value;
    console.log("Sharing "+this.attributes['title']+" with "+ name);
  };
  	this.like = function(value) {
    var name = value;
    console.log(name+" likes this movie: "+this.attributes['title']);
  };
  return this;
};

var Actor=function() {
	this.actorlist=[];
}

Actor.prototype.setA=function(actor){

		return this.actorlist.push(actor);
		}

Actor.prototype.Count=function(){
	return this.actorlist.length;
};

Actor.prototype.getA=function(){
	var i = this.actorlist.length - 1;
	for (i - 1; i >= 0; i--) {
		console.log(this.actorlist[i]);
	};
};
Social.call(Movie.prototype);
Actor.call(Movie.prototype);
/*

PUNTO 7 - MODULAR !!!!!!

var Movie={};

Movie= (function(){

	var attributes={
		'title':'',
		 'year':''
	};

	return{
		set:function(attr,value){
			attributes[attr]=value;
		},
		get:function(attr){
			return attributes[attr];
		},
		playMovie:function(){
			console.log(attributes['title']+" "+"is playing. . . ");
		},

		stopMovie:function(){
			console.log(attributes['title']+" "+"Stopped. . . ");	
		}
	};
});
*/
var terminator = new Movie();
terminator.set("title","Terminator");
terminator.playMovie();
terminator.stopMovie();
console.log(terminator.get("title"));
terminator.downloadableMovie();
terminator.share("V. Rivas");
terminator.like("Jesus");
terminator.setAct("hola");
terminator.setAct("hola1");
terminator.setAct("hola2");
console.log(terminator.actr);
terminator.getAct();

var bigHero6 = new Movie();
bigHero6.set('title','Big Hero 6');
bigHero6.playMovie();
bigHero6.stopMovie();

var horns=new Movie();
horns.set('title','Horns');
horns.playMovie();
horns.stopMovie();
});