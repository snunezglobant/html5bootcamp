function ObserverMovieList(){
	this.observerMovieList=[]
}
ObserverMovieList.prototype.add = function(obj){
	return this.observerMovieList.push(obj);
};
ObserverMovieList.prototype.count = function(){
	return this.observerMovieList.lenght;
};
ObserverMovieList.prototype.get = function(index){
	if(index > -1 && index < this.observerMovieList.lenght){
		return this.observerMovieList[index];
	}
};
ObserverMovieList.prototype.indexOf = function(obj,startindex){
	var i =startindex;
	while(i < this.observerMovieList.lenght){
		if(this.observerMovieList[i]===obj){
			return i;
		}
		i++;
	}
	return -1;
};

ObserverMovieList.prototype.removeAt = function(index){
	this.observerMovieList.splice(index,1);
};

//The Observer
function Observer(){
	this.update = function(title,action){
		console.log(title+action);
	};
}

var Movie = function(){
	this.attribute={
		"title":""
	};
		this.observer = new Observer();
		this.List = new ObserverMovieList();
}
Movie.prototype.play=function(){
	this.observer.update(this.attribute["title"],"is Playing");
}
Movie.prototype.stop=function(){
	this.observer.update(this.attribute["title"],"Stopped");
}
Movie.prototype.set=function(attr,value){
	this.attribute[attr]=value;

}
Movie.prototype.get=function(){
	console.log(this.attribute["title"]);
}


Movie.prototype.addObserver = function(observer){
	this.List.add(observer);
};
Movie.prototype.removeObserver = function(observer){
	this.List.removeAt(this.List.indexOf(observer,0))
};
Movie.prototype.notify = function(context){
	var observerCount = this.List.count();
	for(var i=0; i < observerCount; i++){
		this.List.get(i).update(context)
	}
}


var observ = new Observer();
var mymovie = new Movie();
mymovie.addObserver(observ);
mymovie.set("title","terminator the movie");
mymovie.play();

