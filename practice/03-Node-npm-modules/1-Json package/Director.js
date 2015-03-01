function Director(name,quotes){
	this.name=name;
	this.quotes=[];	
	this.set=function(attr,value){
		this.attributes[attr];
	}
	this.get = function(){
		return this.attributes[attr];
	}	
	Director.prototype.speak=function(){
		var string;
		for(var i=0; i<quotes.length; i++){
			if(i==0){
				string=string+JSON.stringify(quotes[i]);
			}
			else{
				string=string+", "+JSON.stringify(quotes[i]);
			}	
		};
		return console.log(this.name+"says :"+string);
	};
};
module.exports=Director;

