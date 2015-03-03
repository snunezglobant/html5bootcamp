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



			Movie.prototype.setTitle=function(title){
				this.attributes['title']=title;
				
			};



			Movie.prototype.getTitle=function(){
				return this.attributes['title'];
			};

			Movie.prototype.setDesc=function(desc){
				this.attributes['desc']=desc;
				
			};

			Movie.prototype.getDesc=function(desc){
				return this.attributes['desc'];
				
			};

			Movie.prototype.setGenre=function(genre){
				this.attributes['genre']=genre;
				
			};

			Movie.prototype.getGenre=function(genre){
				return this.attributes['genre'];
			};

			Movie.prototype.setYear=function(year){
				this.attributes['year']=year;
				
			};

			Movie.prototype.getYear=function(year){
				return this.attributes['year'];
			};

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

			$('document').ready(
			function visible(){	
				var saw=new Movie();
				saw.setTitle('SAW I');
				saw.setDesc('A good movie');
				saw.setGenre('Terror');
				saw.setYear('2005');
				saw.play();
				saw.stop();
				var observer = new MovieObserver();
				saw.AddObserver(observer);
				var starw=new Movie();
				starw.setTitle('Star Wars');
				starw.play();
				starw.stop();
				
			});

			

