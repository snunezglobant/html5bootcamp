Movie= (function(){

 var attributes={
  'title':'',  
 };

 return{
  set:function(attr,value){
   attributes[attr]=value;
  },
  get:function(attr){
   return attributes[attr];
  },
  Play:function(){
   console.log(attributes['title']+" "+"is Playing");
  },

  Stop:function(){
   console.log(attributes['title']+" "+"Stopped"); 
  }
 };
}());