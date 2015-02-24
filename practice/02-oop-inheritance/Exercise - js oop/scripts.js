/***OBSERVER LIST***/
var MovieObserverList=function(){
	this.movieobserverlist=[];
}

MovieObserverList.prototype.Add=function(obj){
	return this.movieobserverlist.push(obj);
};

MovieObserverList.prototype.Count=function(){
	return this.movieobserverlist.length;
};

MovieObserverList.prototype.Get=function(index){
	if(index > -1 && index < this.movieobserverlist.length){
		return this.movieobserverlist[index];
	}
};

MovieObserverList.prototype.indexOf=function(obj,startIndex){
	var i=startIndex;
	while(i<this.movieobserverlist.length){
		if(this.movieobserverlist[i]===obj){
			return i;
		}
		i++;
	}
	return -1;
};

MovieObserverList.prototype.removeAt=function(index){
	this.movieobserverlist.splice(index,1);
}

/***OBSERVER***/
var MovieObserver=function(){
	this.update=function(title,action){
         console.log(title+" "+action);
	}
}

/***MOVIE***/
var Movie= function(){
	this.attributes={
		'title':'',
		'director':'',
		'actor':''
	};
	this.molist=new MovieObserverList();
	this.observer=new MovieObserver();
}

Movie.prototype.setTitle=function(attr,value){
	this.attributes[attr]=value;
}

Movie.prototype.getTitle=function(attr){
	return this.attributes[attr];
}

Movie.prototype.playMovie=function(){
	this.observer.update(this.attributes['title'],'is playing . . .');
}

Movie.prototype.stopMovie=function(){
	this.observer.update(this.attributes['title'],'Stopped. . . ');
}

Movie.prototype.AddObserver=function(observer){
	this.molist.Add(observer);
};

Movie.prototype.removeObserver=function(observer){
	this.molist.removeAt(this.molist.indexOf(observer,0));
};

Movie.prototype.notify=function(context){
	var movieobservercount=this.molist.Count();
	for(var i=0;i<movieobservercount;i++){
		this.molist.Get(i).update(context);
	}
}


var observer = new MovieObserver();
var terminator = new Movie();
terminator.AddObserver(observer);
terminator.setTitle('title','Terminator');
terminator.play();

/***EXERCISE 2
var advengers=new Movie();
advengers.setTitle('title','The Advengers');
console.log(advengers.getTitle('title'));
advengers.playMovie();
advengers.stopMovie();

var starWars=new Movie();
starWars.setTitle('title','Star Wars');
console.log(starWars.getTitle('title'));
starWars.playMovie();
starWars.stopMovie();***/





