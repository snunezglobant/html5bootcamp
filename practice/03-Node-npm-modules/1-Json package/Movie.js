var Director = require("./Director");
console.log("Pasa");
function Movie(){  
  this.attributes={};         
  function set(key,value){
        this.attributes[key]=value;        
  };
  function get(key){
      return  this.attributes[key];        
  };
};
module.exports=Movie; 
