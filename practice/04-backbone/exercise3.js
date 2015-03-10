 //Model

  var Movie = Backbone.Model.extend({
    defaults: {
      title: "",
      year: 0,
      description: "",
      selected: false
    }
  });


//Collection
var Movies = Backbone.Collection.extend({
  model: Movie,

  getSelected: function() {
    return this.pluck('selected').indexOf(true);
  },

  // Unselect all models
  resetSelected: function() {
    this.each(function(model) {
      model.set({"selected": false});
    });
  },

  // Select a specific model from the collection
  selectByID: function(id) {
    var movie = this.get(id);
    movie.set({"selected": true});
    return movie.id;
  },

});
// Creating collection
var moviepack=[{
  id: 1,
   title: "Robin Hood",
     year: 2000,
     description: "aaaaaaaaaa",
     selected: false
},
{
  id: 2,
   title: "The Terminator",
      year: 2010,
      description: "ssssssssssss",
      selected: false
},
{
  id: 3,
  title:"Iron Man",
  year: 2009,
  description:"zzzzzzzzz",
  selected: false
},
{
  id: 4,
  title:"Birdman",
  year: 2015,
  description:"bbbbbbbbb",
  selected: false
}];
var movies= new Movies(moviepack);


//Views


var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><a href="/movies/<%= id %>"><%= title %></a><hr></h1>',

  events: {
    'click': 'selectMovie'
  },

  selectMovie: function(ev) {
    // console.log($(ev.currentTarget).html());
    console.log('event on ' + this.model.id);
    if (!this.model.get('selected')) {
      this.router.navigate("/movies/" + this.model.id, {trigger: true});
    }
  },
 
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },

  initialize: function(options) {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
    this.router = options.router;
  }
 
});






var ChoseView = Backbone.View.extend({

  template: '<h1>Bienvenido!</h1>\
             <h2>Seleccione una pelicula</h2>',

  class: 'details',
  render: function() {
    this.$el.html(this.template);
    return this;
  }
});


  var DetailsView = Backbone.View.extend({
    el: '#details',

    template: _.template('<h1> <%= title %> </h1>\
                         <br> <h2><%= year %></h2>\
                         <br> <%= description %>'),

    render: function() {
      
      var data = _.extend(this.model.toJSON());
      this.$el.html(this.template(data));
      return this;
    }
  });


var MoviesList = Backbone.View.extend({

  tagName: 'section',
  

  render: function() {
    var that = this;
    var moviesView = this.collection.map(function(movie) {
      return (new MovieView({model : movie, router: that.router})).render().el;
    });
    this.$el.html(moviesView);
    return this;
  },

  initialize: function(options) {
    this.router = options.router;
  }

 
});

var instance;
MoviesList.getInstance = function(options) {
  // console.log(options.collection.getSelected());

  if (!instance) {
    instance = new MoviesList({
      el: options.el,
      collection: options.collection,
      router: options.router
    });
  }
  return instance;
}




  var Layout = Backbone.View.extend({

    template: _.template('           \
               <div id="overview">   \
               </div>                \
               <div id="details">    \
               </div>'),

    render: function() {
      this.$el.html(this.template());
      this.currentDetails.setElement(this.$('#details')).render();
      this.overview.setElement(this.$('#overview')).render();

      return this;
    },

    
    
    initialize: function(options) {
      this.currentDetails = new ChoseView();
      this.overview = new MoviesList({
        collection: options.router.movies,
        router: options.router
      });
    }
 
  });

  var instance;
  Layout.getInstance = function(options) {
    if (!instance) {
      instance = new Layout({
        el: options.el,
        router: options.router,
        collection: options.router.movies
      });
    }
    return instance;
  }



  var MoviesRouter = Backbone.Router.extend({

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectByID(id);
    this.layout.setDetails(this.movies.get(id));
  },

  showMain: function() {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function(options) {
    //this.collection.on('add', this.addOne, this);
    //this.listenTo(this.collection, 'change:add', this.render);
    this.movies = movies;
    this.layout = Layout.getInstance({
      el: '#movies', router: this
    });
    this.layout.render();
  }
});

$(document).ready(function() {
  console.log('init');
  
  var router = new MoviesRouter({el: $('#movies') });
  Backbone.history.start({
    pushState: false,
    root: '/'
  });
});