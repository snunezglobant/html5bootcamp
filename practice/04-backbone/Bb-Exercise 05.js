(function($) {
    var modelMovie = Backbone.Model.extend({
        defaults: function() {
            return {
                title: '',
                description: '',
                duration: ''
            }
        }
    });
    var MovieList = Backbone.Collection.extend({
        model: modelMovie
    });
    var movies = new MovieList();
    var MovieView = Backbone.View.extend({
        model: new modelMovie(),
        tagName: 'div',
        events: {
            'click .edit': 'edit',
            'click .delete': 'delete',
            'click .save': 'save',
            'blur .status': 'close',
        },
        initialize: function() {
            this.template = _.template($('#movie-template').html());
        },
        edit: function(ev) {
            ev.preventDefault();
            this.$('.title').attr('contenteditable', true).focus();
            this.$('.description').attr('contenteditable', true).focus();
            this.$('.duration').attr('contenteditable', true).focus();

        },
        save: function(ev) {
            this.$('.title').attr('contenteditable', false);
            this.$('.description').attr('contenteditable', false);
            this.$('.duration').attr('contenteditable', false);

        },
        delete: function(ev) {
            ev.preventDefault();
            movies.remove(this.model);
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    var MoviesView = Backbone.View.extend({
        model: movies,
        el: $('#movie-container'),
        initialize: function() {
            this.model.on('add', this.render, this);
            this.model.on('remove', this.render, this);
        },
        render: function() {
            var self = this;
            self.$el.html('');
            _.each(this.model.toArray(), function(m, i) {
                self.$el.append((new MovieView({
                    model: m
                })).render().$el);
            });
            return this;
        }
    });

    $(document).ready(function() {

        var moviesample = new modelMovie({
            title: 'Hungry Games',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            duration: '120 min'
        });
        movies.add(moviesample);
        var appView = new MoviesView();
        appView.render();
        $('#new-movie').submit(function(ev) {
            var m = new modelMovie({
                title: $('#title').val(),
                description: $('#description').val(),
                duration: $('#duration').val()

            });
            movies.add(m);
            $('#title').val('');
            $('#description').val('');
            $('#duration').val('');
            console.log(movies.toJSON());
            return false;
        });
        var appView = new MoviesView();
    });
})(jQuery);