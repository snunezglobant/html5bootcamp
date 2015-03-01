var $=require('Jquery');
var Director = require("./Director");
function Movie(){  
	this.attributes={};         
	Movie.prototype.set=function(attr,value){
		this.attribute[attr]=value;
	}
	Movie.prototype.get=function(){
		console.log(this.attribute["title"]);
	}
};
module.exports=Movie; 
