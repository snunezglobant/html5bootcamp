(function($) {
    var modelMovie = Backbone.Model.extend({
        defaults: function() {
            return {
                title: '',
                year: ''
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
            'blur .year': 'close',
            'keypress .year': 'onEnterUpdate'
        },
        initialize: function() {
            this.template = _.template($('#movie-template').html());
        },
        edit: function(ev) {
            ev.preventDefault();
            this.$('.year').attr('contenteditable', true).focus();
        },
        close: function(ev) {
            var year = this.$('.year').text();
            this.model.set('year', year);
            this.$('.year').removeAttr('contenteditable');
        },
        onEnterUpdate: function(ev) {
            var self = this;
            if (ev.keyCode === 13) {
                this.close();
                _.delay(function() {
                    self.$('.year').blur()
                }, 100);
            }
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
            title: "0000"
            year: "0000"
        });
        movies.add(moviesample);
        var appView = new MoviesView();
        appView.render();
        $('#new-movie').submit(function(ev) {
            var m = new modelMovie({
                title: $('#title-name').val(),
                year: $('#year-update').val()
            });
            movies.add(m);
            console.log(movies.toJSON());
            return false;
        });
        var appView = new MoviesView();   
    });
})(jQuery);