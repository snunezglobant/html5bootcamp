$('document').ready=(function(){
	var Movie= require('./Movie');
	lotr = new Movie();	
	var peterJackson = new Director('Peter Jackson');
	peterJackson.set('quotes', ['The vast majority of the CGI budget is labor','Fuck off']);
	lotr.set('director', peterJackson);
	lotr.get('director').speak();
});