

var express = require('express');
var app = express();
port = process.argv[2] || 8000;

app.configure(function () {
    app.use(
        "/js/data/movies.json", 
        express.static("C:/Documents and Settings/Usuario/html5bootcamp/practice/05-angularjs") 
    );
});
app.listen(port); 
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");