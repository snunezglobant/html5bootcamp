function Director(name,quotes){
	this.name=name;
	this.quotes=[];	
		
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

