//$('document').ready=(function(){
	var lotr = require("./Movie");
	lotr.set('title','Lord of the rings');
	var peterJackson = new Director('Peter Jackson');
	peterJackson.set('quotes', ['The vast majority of the CGI budget is labor.']);
	lotr.set('director', peterJackson);
	lotr.get('director').speak(); 
//});