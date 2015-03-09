var Movie = Backbone.Model.extend({
    title: "",
    year: '',
    genre: '',
    duration: '',
    director: '',
    actor: '',
    description: ""
});

var MovieCollections = Backbone.Collection.extend({
    model: Movie

});

var Movies = new MovieCollections();


var Vista = Backbone.View.extend({
    el: '#content',

    initialize: function() {
        Movies.on('add', this.showMovie);
        Movies.on('remove', this.showMovie);

    },
    showMovie: function(model) {
        var view = new ShowMovieview({
            model: model
        });
        $('.movies').append(view.render().$el);

    }

});

var ShowMovieview = Backbone.View.extend({
    tmpl: Handlebars.compile($("#template").html()),

    render: function() {
        this.$el.html(this.tmpl(this.model.toJSON()));
        return this;
    }
});

var view = new Vista();

var pelicula1 = new Movie();
var pelicula2 = new Movie();

pelicula1 = {
    title: "Harry Potter and the Philosopher's Stone",
    year: '2001',
    genre: 'Fantasia',
    duration: '153 min',
    director: 'Chris Columbus',
    actor: 'Daniel Radcliffe ',
    description: "asdsad"
};

pelicula2 = {

    title: "Terminator",
    year: '1984',
    genre: 'Action',
    duration: '153 min',
    director: 'James Cameron',
    actor: 'Arnold Schwarzenegger',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ."

};
Movies.add(pelicula1);
Movies.add(pelicula2);