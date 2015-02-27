//Movie Module

var movie = (function(){

	var title="";
	var year=0;

	return{

			play : function(){
				console.log( title + " is playing...");


			},

			stop: function(){
				console.log(title+" stopped playing...");

			},

	 		set: function( string, value){

				if (string==="title") {title=value} else{year=value};
		

			},

			get: function(){

			return title;
			}

		}
}());