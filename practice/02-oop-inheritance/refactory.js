var Movie = function () {

  var model = {
    attributes : {
        title : '',
        desc : '',
        genre: '',
        year : '';
        }
    };

    model.set = function (attr , value) {
        model.attributes[attr] = value;
    };

    model.get  = function () {
        return model.attributes;
    };

    model.play = function (){
        console.log ('The movie playing is '+this.attributes['title']+'...');
    };

    model.stop= function(){
        console.log ('The movie stooping is '+this.attributes['title']+'...');
    };

    return model;
});