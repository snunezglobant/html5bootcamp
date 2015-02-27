
//movieObserver
      var movieObserver=function(){
          this.update = function(content){
          console.log(content);
        }
      };

      //movieObserverList

      var movieObserverList=function(){

        this.movieobserverList=[];
      };

      movieObserverList.prototype.add=function( obj ){
          return this.movieobserverList.push( obj );
      };

      movieObserverList.prototype.count = function(){
          return this.movieobserverList.length;
      };
 
      movieObserverList.prototype.get = function( index ){
        if( index > -1 && index < this.movieobserverList.length ){
          return this.movieobserverList[ index ];
        }
      };
       
      movieObserverList.prototype.indexOf = function( obj, startIndex ){
        var i = startIndex;
       
        while( i < this.movieobserverList.length ){
          if( this.movieobserverList[i] === obj ){
            return i;
          }
          i++;
        }
       
        return -1;
      };
       
      movieObserverList.prototype.removeAt = function( index ){
        this.movieobserverList.splice( index, 1 );
      };

      //movie


   function Movie(attributes){
     this.attributes={};
   };

   Movie.prototype.setTitle=function(title){
    this.attributes['title']=title;
    
   };
   Movie.prototype.getTitle=function(title){
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
   }

   Movie.prototype.setYear=function(year){
    this.attributes['year']=year;
   };
   
   Movie.prototype.getYear=function(year){
    return this.attributes['year'];
   };

   Movie.prototype.playMovie=function(){
    console.log("The movie is playing"+" "+this.attributes['title']);
   }

   Movie.prototype.stopMovie=function(){
    console.log("The movie is stopping"+" "+this.attributes['title']);
  }

  


   $('document').ready(function visible(){ 

    var movie= new Movie();
    movie.setTitle('The theory of everything');
    movie.setDesc('Biography');
    movie.setGenre('Science Fiction');
    movie.setYear('2014');
    console.log(movie.getTitle());
    console.log(movie.getDesc());
    console.log(movie.getGenre());
    console.log(movie.getYear());
    movie.playMovie();
    movie.stopMovie();
    var movie2=new Movie();
    movie2.setTitle('Enigma');
    movie2.playMovie();
    var obs = new MovieObserver();
        saw.AddObserver(obs);
        var how=new Movie();
        howl.setTitle('Howl');
        howl.play();
        howl.stop();

  });  






