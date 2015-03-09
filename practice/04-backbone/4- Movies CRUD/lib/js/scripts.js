(function($) {
    var valName=document.getElementById("title-name");
    var modelMovie = Backbone.Model.extend({
        defaults: function() {
            return {
                title: '',
                score: ''
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
            'blur .score': 'close',
            'keypress .score': 'onEnterUpdate'
        },
        initialize: function() {
            this.template = _.template($('#movie-template').html());
        },
        edit: function(ev) {
            ev.preventDefault();
            this.$('.title').attr('contenteditable', true).focus();
            this.$('.score').attr('contenteditable', true);
            
        },
        close: function(ev) {
            var score = this.$('.score').text();
            this.model.set('score', score);
            this.$('.score').removeAttr('contenteditable');
        },
        onEnterUpdate: function(ev) {
            var self = this;
            if (ev.keyCode === 13) {
                this.close();
                _.delay(function() {
                    self.$('.score').blur()
                }, 100);
            }
        },
        delete: function(ev) {
            ev.preventDefault();
            movies.remove(this.model);
            $('#title-name').focus();

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

    String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
    };

    $(document).ready(function() {
        var moviesample = new modelMovie({});    
        var appView = new MoviesView();
        appView.render();
        $('#new-movie').submit(function(ev) {
            if(valName.text==null){ 
                var m = new modelMovie({       
                          
                        title: $('#title-name').val(),
                        score: $('#score-update').val()+'points'
                    
                });
            }else{
                var m = new modelMovie({       
                          
                        title: 'Inception',
                        score: '8.8'                    
                });
            }
            movies.add(m);
            console.log(movies.toJSON());
            return false;
        });
        var appView = new MoviesView();   
    });
})(jQuery);