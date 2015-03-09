var Movie = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
        id: undefined,
        title: '',
        year: undefined,
        genre: '',
        director: ''
    },
    
    initialize: function(){
        console.log("A new movie has been created");
        this.on('change', function(){
            console.log("The movie data changed");
        });
    }
});