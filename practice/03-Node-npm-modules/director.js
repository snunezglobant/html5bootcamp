/*****************/
/*  Excercise 4  */
module.exports = function(name){
    return{
        getName: function(){
            return name;
        },
        setname: function(newName){
            name = newName;
        }
    };
};