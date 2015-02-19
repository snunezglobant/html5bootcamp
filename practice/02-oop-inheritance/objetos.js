




//Observer
var unaPelicula= {

	label: 'Robin hood',
	completed: false

};

function observer(changes){
  changes.forEach(function(change, i){
      console.log('what property changed? ' + change.name);
      console.log('how did it change? ' + change.type);
      console.log('whats the current value? ' + change.object[change.name]);
      console.log(change); // all changes
  });
}


Object.observe(unaPelicula, observer);

unaPelicula.label="furia de titanes";





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


var terminator = new Movie( "The Terminator", 2009);
var robinhood = new Movie( "Robin hood", 2010);

//MOVIE MODULE
var mov =(function(){
var title= "";
var year = 0;
return {

	set: function(suTitle,suYear){

  	 title=suTitle;
  	 year=suYear;

  },

  	get: function(){


  		return title+" "+year
  	},

  	play: function() {
     return( title + " is playing....");
  }


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