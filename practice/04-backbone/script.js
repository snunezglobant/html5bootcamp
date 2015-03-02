//count elements of list
<script> Handlebars.registerHelper('length', function(list) {
  return list.length;
});

//Information Object to show on template
var data = {
    title : "The best movies",
    description : "Based on IMDB page",
    info: {
        date: "",
        languages : [
            {"lang":"spanish"},
            {"lang":"english"}
        ]
    },
    movies: [
        {
            name: "Interstellar",
            Year: "2014",
            genre: "Cience Fiction",
            description: "    ",
            director:  "Christopher Nolan",
           
            
        },
        {
            name: "Iron Man 3",
            Year: "2014",
            description:" ",
            genre: "Cience Fiction",
            
        },
        {
            name: "Man of Steel",
            Year: "2014",
            genre: "Cience Fiction",
            descrition:" ",
            director: "Christopher Nolan",
           
           
        }
    ]
};

//Gets the template contents Declared Defined Tags script.
var template = document.getElementById("movies-tmp").innerHTML;

// Compile the template using the compile method.
var templateCompile = Handlebars.compile(template);

// Inject the information in the compiled template and make reemplados .
var result = templateCompile(data);

// We insert the result in the body of the document.
// Using jQuery would be: $ (" body" ) append (result ).
document.body.insertAdjacentHTML("beforeend", result);

</script>