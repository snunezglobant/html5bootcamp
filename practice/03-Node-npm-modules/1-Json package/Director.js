var Director= function(name){
	var string="";
	this.attributes={
		'name': '',
		'quotes': []
	};
	this.attributes['name']=name;
	
	this.set=function(key,value){
		this.attributes[key]=value;
	}
	this.get = function(key){
		return this.attributes[key];
	}	
	this.speak=function(){
		
		for(var i=0; i<this.attributes['quotes'].length; i++){
			if(i==0){
				string=string+JSON.stringify(this.attributes['quotes'][i]);
			}
			else{
				string=string+", "+JSON.stringify(this.attributes['quotes'][i]);
			}	
		}
		return console.log(name+' says :'+string);
	}
};
module.exports=Director;

