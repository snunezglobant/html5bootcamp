$('document').ready(function() {
    var fuente = $('#nuestra-plantilla').html();
    var plantilla = Handlebars.compile(fuente);
    var datos = {
        movie: 'Alien',
        year: '1979',
        description: 'The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.',
        director: 'Riddley Scott',
        writers: 'Dan OBannon (story), Ronald Shusett (story)',
        stars: 'Sigourney Weaver, Tom Skerritt, John Hurt'
    };
    var html = plantilla(datos);
    $('#contenido').html(html);
});