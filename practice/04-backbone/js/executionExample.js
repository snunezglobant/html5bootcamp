var movie1 = new Movie({
    id: 1,
    title: "A title for this movie",
    year: 2015,
    genre: "Comedy",
    director: "Woody Allen"
});
var movie2 = new Movie({
    id: 2,
    title: "Hunger games",
    year: 2012,
    genre: "Adventure",
    director: "Gary Ross"
});
var movie3 = new Movie({
    id: 3,
    title: "Psycho",
    year: 1975,
    genre: "Terror",
    director: "Alfred Hitchcock"
});

var view = new MovieView();
var collection = new MovieCollection();