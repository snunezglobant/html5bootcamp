var source = $('#movieTemplate').html();
var template = Handlebars.compile(source);
var data = {
    movie: {
        title: "The Hunger Games",
        year: 2012,
        genreList: [
            {genre: "Action"},
            {genre: "Adventure"}
        ],
        director: "Gary Ross",
        writers: [
            {name: "Gary Ross"},
            {name: "Suzanne Collins"},
            {name: "Billy Ray"}
        ],
        actors: [
            {name: "Jennifer Lawrence"},
            {name: "Josh Hutcherson"},
            {name: "Liam Hemsworth"},
            {name: "Woody Harrelson"},
            {name: "Elizabeth Banks"},
            {name: "Lenny Kravitz"},
            {name: "Stanley Tucci"},
            {name: "Donald Sutherland"}
        ],
        description: "The dystopian nation of Panem consists of a wealthy, glamorous Capitol, ruled by President Snow, ruling twelve poorer districts. As punishment for a past rebellion and as a way to demoralize the districts to quell social uprising, each district must provide two \"tributes\"—one boy and one girl between the ages of 12 and 18 selected by lottery (the \"Reaping\")—every year to compete in the televised Hunger Games; they must fight to the death in a vast arena, with the sole survivor rewarded with fame and wealth."
    }
};
$("#movieRendering").html(template(data));
