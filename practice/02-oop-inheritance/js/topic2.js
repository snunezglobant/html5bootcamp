$(document).ready(function(){
	//Contructor Movie
	function Movie(){
		this.attributes = {};
		this.movieObs = new MovieObserver();
		this.act = new Actor();	
	}

	Movie.prototype.play = function(){
		this.movieObs.setObs1();
		return "Playing " + this.attributes['Title'] + "...";
	}
	
	Movie.prototype.stop = function(){
		this.movieObs.setObs2();
		return  this.attributes['Title'] + " Stopped.";
	}

	Movie.prototype.downloadableMovie = function(){
		return "Downloading " + this.attributes['Title'] + "...";
	}

	//Sets
	Movie.prototype.setTitle = function(value){
		this.attributes['Title'] = value;
	}
	Movie.prototype.setYear = function(value){
		this.attributes['Year'] = value;
	}
	Movie.prototype.setAct = function(value){
   		this.act.setActor(value);
  	}

	//Gets
	Movie.prototype.getTitle = function(){
		return  "Title: " + this.attributes['Title'];
	}
	Movie.prototype.getYear = function(){
		return  "Year: " + this.attributes['Year'];
	}
	Movie.prototype.getAct = function(){
   		this.act.getActor();
  	}

	//Observer
	Movie.prototype.observer = function(){
	    this.movieObs.isObserving();
	}

	//Movie Observer 
	function MovieObserver(){
		this.movieO = 0;
	}

	MovieObserver.prototype.setObs1 = function(){
	    this.movieO = 1;
	}

	MovieObserver.prototype.setObs2 = function(){
	    this.movieO = 2;
	}

	MovieObserver.prototype.isObserving = function(){
	    if (this.movieO == 0){
	    	console.log("No playing or stopped yet");
		}
	    if (this.movieO == 1){
	    	console.log("Is playing");
		}
	    if (this.movieO == 2){
	    	console.log("Is stopped");
		}
	}

	/*Exercise 7

	var Movie = {};

	Movie = (function(){

 		 var attributes={};

 		return{
  			setTitle:function(value){
				attributes['Title'] = value;
			},
			setYear:function(value){
				attributes['Year'] = value;
			},
			getTitle:function(){
				return  "Title: " + attributes['Title'];
			},
			getYear:function(){
				return  "Year: " + attributes['Year'];
			},
			play:function(){
				return "Playing " + attributes['Title'] + "...";
			},
			
			stop:function(){
				return  attributes['Title'] + " Stopped.";
			},

			downloadableMovie:function(){
				return "Downloading " + attributes['Title'] + "...";
			}

  		};
	});
	*/

	//Social
	function Social() {
		this.share = function(value) {
			var name = value;
	    	console.log("Sharing " + this.attributes['Title'] + " with " + name);
	  	};
	  	this.like = function(value) {
	    	var name2 = value;
	    	console.log(name2 + " likes this movie: "+ this.attributes['Title']);
	  	};
	  	return this;
	};

	//Actor
	function Actor(){
		this.list = [];
	}

	Actor.prototype.setActor = function(value){
		this.list.push(value);
	}

	Actor.prototype.getActor = function(){
		for (var i = 0; i <= (this.list.length-1); i++) {
			console.log(this.list[i]);
		};
	}



	MovieObserver.call(Movie.prototype);
	Social.call(Movie.prototype);
	Actor.call(Movie.prototype);
	
	//Tests

	var terminator = new Movie();

	terminator.setTitle('\"The Terminator\"');
	terminator.setYear('1984');
	//terminator.play();
	//terminator.stop();
	terminator.observer();
	terminator.downloadableMovie();
	terminator.share('Mick');
	terminator.like('Jagger');

	var gladiator = new Movie();

	gladiator.setAct('Russell Crowe');
	gladiator.setAct('Joaquin Phoenix');
	gladiator.setAct('Guillermo Francella');

	gladiator.getAct();

	//console.log(terminator.getTitle());
	//console.log(terminator.getYear());
	//console.log(terminator.play());
	//console.log(terminator.stop());
	//console.log(terminator.downloadableMovie());

});