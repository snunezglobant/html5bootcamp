$(document).ready(function()
{





// Contructor Movie


var Movie= function(){
	this.attributes={
		'title':'',
		'Year':''
	};
	 this.actr=new Actor();
	
	
}

Movie.prototype.setTitle=function(attr,value){
	this.attributes[attr]=value;
}

Movie.prototype.getTitle=function(){
	return "Title : "+this.attributes['title']+"\n Year: " +this.attributes['year']+"\n";
}


Movie.prototype.playMovie=function(){
	console.log("Playing "+this.attributes['title']+"...\n");
}

Movie.prototype.stopMovie=function(){
	console.log(this.attributes['title']+" "+"Stopped.");	
}

Movie.prototype.downloadableMovie=function(){
	console.log("Downloading "+this.attributes['title']+"...\n");	
}



// Set and get for Actors

Movie.prototype.setAct=function(actor){
   this.actr.setA(actor);
  }

 Movie.prototype.getAct=function(){
   this.actr.getA();
  }



 var Actor=function() {
 	this.actorlist=[];
	}

Actor.prototype.setA=function(actor){

  return this.actorlist.push(actor);
  }



Actor.prototype.getA=function(){
 for (var i =  0; i <= (this.actorlist.length ); i++) {
  console.log(this.actorlist[i]);
 };
};




// Mixin for Social options

var Social = function() {
  this.share = function(value) {
    var name = value;
    console.log("Sharing "+this.attributes['title']+" with "+ name);
  };
  this.like = function(value) {
    var name2 = value;
    console.log(name2+" likes this movie: "+this.attributes['title']);
  };
  return this;
};
 

 

Social.call(Movie.prototype);








// Tests

var terminator = new Movie();





terminator.setTitle('title','\"The Terminator\"');
terminator.setTitle('year','1984');





terminator.share('Juan');
terminator.like('Pedrito');

terminator.setAct("Robert De Niro");
terminator.setAct("Julia Roberts");
terminator.setAct("Carlos Villagran");

terminator.getAct();

console.log(terminator.actr)

var forrestgump = new Movie();
var shawshank = new Movie();



forrestgump.setTitle('title','\"Forrest Gump\"');
forrestgump.setTitle('year','1994');

shawshank.setTitle('title','\"The Shawshank Redemption\"');
shawshank.setTitle('year','1995');

//terminator.playMovie();
//terminator.stopMovie();



//console.log(terminator.getTitle());

//console.log(forrestgump.getTitle());
//console.log(shawshank.getTitle());



//terminator.downloadableMovie();








});





