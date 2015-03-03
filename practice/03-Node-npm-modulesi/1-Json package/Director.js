function Director(attributes,quotes){
	
	this.attributes={
		'name': "",
		'quotes': []
	};
	this.set=function(key,value){
		this.attributes[key]=value;
	}
	this.get = function(key){
		return this.attributes[key];
	}	
	this.speak=function(){
		var string;
		for(var i=0; i<quotes.length; i++){
			if(i==0){
				string=string+JSON.stringify(quotes[i]);
			}
			else{
				string=string+", "+JSON.stringify(quotes[i]);
			}	
		}
		return console.log(this.attributes['name']+"says :"+string);
	}
};
module.exports=Director;

