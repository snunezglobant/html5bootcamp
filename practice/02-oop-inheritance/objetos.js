
function Movie( title, year ) {
 
  this.title = title;
  this.year = year;
 
  this.play = function () {

    return this.title + " is playing....";
  };


  this.stop = function(){

    return this.title+ " stopped";
  };


  this.set= function(title){

    this.title=title;

  };


  this.get =function(){

    return this.title;
  };
}


var terminator = new Movie( "The Terminator", 2009);
var robinhood = new Movie( "Robin hood", 2010);
terminator.play(); // The Terminator is playing...
terminator.stop();// The Terminator stopped






//MOVIE MODULE
var mov =(function(){
var title= "";
var year = 0;

return {
  

  play: function() {
     return( title + " is playing....");
  }

  stop: function(){
    return( title + " stopped");
  }


	set: function(suTitle,suYear){

  	 title=suTitle;
  	 year=suYear;

  },

  get: function(){


  		return title+" "+year
  	},



};
}());

mov.title-->NO existe
mov.set("The Terminator", 2010);//cargar la pelicula
mov.play("The Terminator");//darle play
mov.get();//info de la pelicula


//Movie Observer
function observer(changes){
  changes.forEach(function(change, i){
      console.log('what property changed? ' + change.name);
      console.log('how did it change? ' + change.type);
      console.log('whats the current value? ' + change.object[change.name]);
      console.log(change); // all changes
  });
}


Object.observe(mov, observer);

// ARMANDO PROTOTIPO DE PLAY

function Movie( title, year ) {
 
  this.title = title;
  this.year = year;
 
  this.set= function(title){

    this.title=title;

  }

  this.play = function () {
    return this.title + " is playing....";
  };
}

Movie.prototype.play= function() {
  console.log("Playing..."+ this.title)
};


function robocopMovie(type){ ///type = si se puede descargar o no
  
  Movie.call(this,"The Terminator", "Descargable");
  this.type=type;


}

robocopMovie.prototype=Object.create(Movie.prototype);
robocopMovie.prototype.download= function(){
  console.log("Tipo: "+this.type+"  Downloading..."+this.title);
}

var movie1= new Movie("movie1", 2010);
var movie2 = new Movie("movie2", 2011);
var robocop= new robocopMovie("Descargable");
movie1.play();// movie1 is playing...
movie2.play();// movie2 is playing...
robocop.download(); //  Tipo: Descargable  Downloading...The Terminator