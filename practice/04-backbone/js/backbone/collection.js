var MovieCollection = Backbone.Collection.extend({
    model: Movie,
    initialize: function(){
        console.log("New collection created");
        this.on('add', function(){
            console.log("Movie added");
        });
        this.on('change', function(){
            console.log("Collection changed");
        });
        this.on('remove', function(){
            console.log("Movie deleted");
        });
    },
    
    url: "/04-backbone/movies.json"
    
});