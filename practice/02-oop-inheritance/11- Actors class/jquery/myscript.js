			//MOVIE OBSERVER
			var MovieObserver=function(){
				  this.update = function(content){
				  console.log(content);
				}
			};

			//MOVIEOBSERVERLIST

			var MovieObserverList=function(){

				this.movieobserverList=[];
			};

			MovieObserverList.prototype.add=function( obj ){
  				return this.movieobserverList.push( obj );
			};

			MovieObserverList.prototype.count = function(){
  				return this.movieobserverList.length;
			};
 
			MovieObserverList.prototype.get = function( index ){
			  if( index > -1 && index < this.movieobserverList.length ){
			    return this.movieobserverList[ index ];
			  }
			};
			 
			MovieObserverList.prototype.indexOf = function( obj, startIndex ){
			  var i = startIndex;
			 
			  while( i < this.movieobserverList.length ){
			    if( this.movieobserverList[i] === obj ){
			      return i;
			    }
			    i++;
			  }
			 
			  return -1;
			};
			 
			MovieObserverList.prototype.removeAt = function( index ){
			  this.movieobserverList.splice( index, 1 );
			};

			//MOVIE

			var Movie=function(){
				 this.attributes={};
				 this.movielist=new MovieObserverList();
				 this.watcher=new MovieObserver();
			};

			Movie.prototype.set=function(key, value) {
				this.attributes[key] = value;
			}

			Movie.prototype.get=function(key){
				return this.attributes[key];
			};

			/*code changed in order to follow bootcamp template as seen in webpage; also this is the clear code to reference
			in the module version of the Movie*/

			Movie.prototype.play=function(content){
				content="You're playing"+" "+this.attributes['title']; 
				return this.watcher.update(content);
				
			};

			Movie.prototype.stop=function(content){
				content="The "+this.attributes['title']+ " movie is stopped";
				return this.watcher.update(content);
				
			};

							
			Movie.prototype.AddObserver=function(observer){
				this.movielist.add(observer);
			};
			Movie.prototype.removeObserver=function(observer){
				this.movielist.removeAt(this.movielist.indexOf(observer,0));
			};
			Movie.prototype.notify=function(context){
				var movieobservercount=this.movielist.Count();
				for(var i=0;i<movieobservercount;i++){
					this.movielist.Get(i).update(context);
				}
			};

			

			//MOVIE MODULE

			var MovieModule = {};
			MovieModule=(function (){

			  var properties = {
			    attributes : {
			        'title' : '',
			        'desc' : '',
			        'genre': '',
			        'year': ''
			        }
			   };

			   return{

				    set: function (key , value) {
				        properties.attributes[key] = value;
				    },

				    get  : function (key) {
				        return properties.attributes[key];
				    },

				    play : function (){
				        console.log ("You're playing"+" "+properties.attributes['title']);
				    },

				    stop : function(){
				        console.log ("The "+properties.attributes['title']+ " movie is stopped");
				    }

			    };
			}());

			//DOWNLOADABLEMOVIE

			var DownloadableMovie=function(){};
			DownloadableMovie.prototype = new Movie();
			DownloadableMovie.prototype.constructor = DownloadableMovie;
			DownloadableMovie.prototype.download = function () {
				console.log(this.attributes['title']+" is downloading.");
			};

			//MIXIN INHERITANCE

			var Social={
				share:function(dude){
					console.log("I'm sharing the "+this.attributes['title']+" movie with "+dude+".");
				},
				like:function(){
					console.log("Well, I don't dislike this movie. But it isn't Casablanca.");
				}
			};

			$.extend(true,Movie.prototype,Social);

			//ACTORS

			var Actors=function(name){
				this.name=name;
			}
			var nicho=new Actors('Jack Nicholson');
			var depp=new Actors('Johnny Depp');


			$('document').ready(

			function visible(){	
				console.log(nicho.name);		
		    	console.log(depp.name);
			});
			
			