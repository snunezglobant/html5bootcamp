var MovieView = Backbone.View.extend({
    initialize: function(){
        console.log("You have a new view");
    },
    
    tagName: 'p',
    
    className: 'movie'
});