
function Movie(){  
	var director=require("./Director");
	this.attributes={};
	Movie.prototype.set=function(key,value){
		 this.attributes[key]=value;
	};
	Movie.prototype.get=function(key){
		return this.attributes[value];
	};
};
module.exports=Movie; 
