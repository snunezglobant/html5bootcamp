 //movie objet
 var Movie = function(){
	this.attribute={
		"title":""
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



