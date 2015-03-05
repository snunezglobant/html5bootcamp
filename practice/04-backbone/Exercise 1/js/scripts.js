
$('document').ready(function(){

var source = $('#handtest').html();

var template = Handlebars.compile(source);

var data = {
	title : 'THE TERMIANTOR',
	year: '1984',
	genre: 'Action',
	duration: '107 min',
	director: 'James Cameron',
	actor: 'Arnold Schwarzenegger',
	description: 'A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.'
};

var html = template(data);
 
$('#content').html(html);


});
