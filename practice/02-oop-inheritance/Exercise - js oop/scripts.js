/***EXERCISE 3***/
var MovieObserver=function(){
	this.movieobserverlist=[];
}

MovieObserver.prototype.Add=function(obj){
	return this.movieobserverlist.push(obj);
};

MovieObserver.prototype.Count=function(){
	return this.movieobserverlist.length;
};

MovieObserver.prototype.Get=function(index){
	if(index > -1 && index < this.movieobserverlist.length){
		return this.movieobserverlist[index];
	}
};

MovieObserver.prototype.indexOf=function(obj,startIndex){
	var i=startIndex;
	while(i<this.movieobserverlist.length){
		if(this.movieobserverlist[i]===obj){
			return i;
		}
		i++;
	}
	return -1;
};

MovieObserver.prototype.removeAt=function(index){
	this.movieobserverlist.splice(index,1);
}

/***EXERCISE 1***/
var Movie= function(){
	this.attributes={
		'title':'',
		'director':'',
		'actor':''
	};
	var movieobserver=new MovieObserver();
}

Movie.prototype.setTitle=function(attr,value){
	this.attributes[attr]=value;
}

Movie.prototype.getTitle=function(attr){
	return this.attributes[attr];
}

Movie.prototype.playMovie=function(){

	console.log(this.attributes['title']+" is Playing");
}

Movie.prototype.stopMovie=function(){
	console.log(this.attributes['title']+" Stopped");
}

Movie.prototype.AddObserver=function(observer){
	this.movieobserver.Add(observer);
};

Movie.prototype.removeObserver=function(observer){
	this.movieobserver.removeAt(this.movieobserver.indexOf(observer,0));
};

Movie.prototype.notify=function(context){
	var movieobservercount=this.movieobserver.Count();
	for(var i=0;i<movieobservercount;i++){
		this.movieobserver.Get(i).update(context);
	}
}


/***EXERCISE 2***/
var advengers=new Movie();
advengers.setTitle('title','The Advengers');
console.log(advengers.getTitle('title'));
advengers.playMovie();
advengers.stopMovie();


var starWars=new Movie();
starWars.setTitle('title','Star Wars');
console.log(starWars.getTitle('title'));
starWars.playMovie();
starWars.stopMovie();





