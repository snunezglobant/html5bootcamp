$('document').ready(function() {
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    var data = {
        movies: [{
            title: "BoyHood",
            year: "2014"
        }, {
            title: "Marvel's the Avengers",
            year: "2012"
        }, {
            title: "The Goodfather",
            year: "1972"
        }, {
            title: "Toy Story 3",
            year: "2010"
        }, {
            title: "Ratatouille",
            year: "2007"
        }, {
            title: "The Incredibles",
            year: "1984"
        }, {
            title: "Up",
            year: "2009"
        }, {
            title: "Repulsion",
            year: "1965"
        }]
    };
    Handlebars.registerHelper('list', function(items, options) {
        var out = "<ol>";
        for (var i = 0, l = items.length; i < l; i++) {
            out = out + "<li>" + options.fn(items[i]) + "</li>";
        }
        return out + "</ol>";
    });
    var html = template(data);
    $('#content').html(html);
});