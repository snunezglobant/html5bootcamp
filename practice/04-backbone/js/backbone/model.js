var Movie = Backbone.Model.extend({
    defaults: {
        id: undefined,
        title: 'A title for this movie',
        year: 2015,
        genre: 'Comedy',
        director: 'Woody Allen'
    },
    
    initialize: function(){
        console.log("A new movie has been created");
        this.on('change', function(){
            console.log("The movie data changed");
        });
    },
    url: "/movie" // Don't know what is the correct value yet
});