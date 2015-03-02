var Movie=function (){
 this.attr={
 	"title":"",
 	"nombredirector":""
 };
};

 Movie.prototype.setAttr = function(attr,value){
 	this.attr[attr]=value;
}; 
 Movie.prototype.getAttr = function(attr){
 	console.log(this.attr[attr]);
}; 



module.exports = Movie; 