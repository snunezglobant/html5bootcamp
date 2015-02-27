$(document).ready(function()
{

// Refactor Movie class as a Module keeping your previous code for reference.

var Movie={};

Movie= (function(){

	var attributes={
		'title':'',
		'year':''
	};

	return{
		setTitle:function(attr,value){
			attributes[attr]=value;
		},
		getTitle:function(){
			return "Title : "+attributes['title']+"\n Year: " +attributes['year']+"\n";
		},
		playMovie:function(){
			console.log("Playing "+attributes['title']+"...\n");
		},

		stopMovie:function(){
			console.log(attributes['title']+" "+"Stopped.");	
		}
	};

 });


// Tests

var terminator = new Movie();
var forrestgump = new Movie();
var shawshank = new Movie();

terminator.setTitle('title','\"The Terminator\"');
terminator.setTitle('year','1984');

forrestgump.setTitle('title','\"Forrest Gump\"');
forrestgump.setTitle('year','1994');

shawshank.setTitle('title','\"The Shawshank Redemption\"');
shawshank.setTitle('year','1995');




terminator.playMovie();
terminator.stopMovie();

console.log(terminator.getTitle());

console.log(forrestgump.getTitle());
console.log(shawshank.getTitle());


});





