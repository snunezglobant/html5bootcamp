var lista = {
    peliculas: [{

        title: "Harry Potter and the Philosopher's Stone",
        year: '2001',
        genre: 'Fantasia',
        duration: '153 min',
        director: 'Chris Columbus',
        actor: 'Daniel Radcliffe ',
        description: "asdasdasd"

    }, {
        title: "Terminator",
        year: '1984',
        genre: 'Action',
        duration: '153 min',
        director: 'James Cameron',
        actor: 'Arnold Schwarzenegger',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    }]
};
var cont = $("#template").html();
var tmpl = Handlebars.compile(cont);
html = tmpl(lista);
$("#content").append(html);