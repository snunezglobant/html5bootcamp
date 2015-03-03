Handlebars.registerHelper('length', function(list) {
  return list.length;
});

var data = {
    title : "Best movie",
    description : "According to IMDB data...",
    info: {
        date: "the year",
        languages : [
            {"lang":"Spanish"},
            {"lang":"English"}
        ]
    },
    movies: [
        
        {
            name: "Inception",
            rating: "8,8",
            director: "Christopher Nolan"
        }
    ]
};

var template = document.getElementById('movies-tmp').innerHTML;


var templateCompile = Handlebars.compile(template);


var result = templateCompile(data);

document.body.insertAdjacentHTML("beforeend", result);