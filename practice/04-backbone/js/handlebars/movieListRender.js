var source = $('#movieListTemplate').html();
var template = Handlebars.compile(source);
var data = {
    movies: [
        {
            title: "12 Monkeys",
            year: "1995"
        }, {
            title: "La Patagonia Rebelde",
            year: "1974"
        }, {
            title: "The Goodfather",
            year: "1972"
        }, {
            title: "El Romance del Aniceto y la Francisca",
            year: "1966"
        }, {
            title: "The Hunger Games",
            year: "2012"
        }, {
            title: "El Secreto de Sus Ojos",
            year: "2009"
        }, {
            title: "Trainspotting",
            year: "1996"
        }, {
            title: "Psycho",
            year: "1960"
        }]
};
$("#movieListRendering").html(template(data));

