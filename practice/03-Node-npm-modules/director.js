/*****************/
/*  Excercise 4  */
/*
 * Allow multiple quotes setting in a single set()'s call, but there are
 * problems when showing quotes with speak()
 */
module.exports = function(name){
    return{
        quotes: new Array(),
        speak: function(){
            console.log(name + " says:\n");
            for (var q in this.quotes){
                console.log(this.quotes[q] + "\n");
            }
        },
        set: function(parameter, value){
            if(this.hasOwnProperty(parameter)) this[parameter].push(value);
            else console.log("No such parameter " + parameter);
        }
    };
};