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
var mymovie = new Movie();
mymovie.set("title","terminator the movie");
mymovie.get();
mymovie.play();
mymovie.stop();