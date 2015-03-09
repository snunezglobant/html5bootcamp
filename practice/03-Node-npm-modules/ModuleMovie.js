var Movie = function () {

var libr=require("./director.js");
  var module = {
    attributes : {
        title : '',
        desc : '',
        genre : '';,
        year : '';
        }
    };

    set:function (attr , value) {
        module.attributes[attr] = value;
    },

    get:function () {
        return module.attributes;
    },

    play:function (){
        console.log ('Playing '+this.attributes['title']+'...');
    },

    stop:function(){
        console.log ('Stopped '+this.attributes['title']+'...');
    },

    return module;
});

exports=Movie;

