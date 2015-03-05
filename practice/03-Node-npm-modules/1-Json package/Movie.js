var Movie= function(){  
	var Director=require("./Director");
	this.attributes={};
	Movie.prototype.set=function(key,value){
		 this.attributes[key]=value;
	};
	Movie.prototype.get=function(key){
		return this.attributes[key];
	};
};
module.exports=Movie; 
