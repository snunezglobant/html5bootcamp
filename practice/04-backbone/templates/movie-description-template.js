(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movie-description-template'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!-- Exercise 1 - Write one Handlebars template to show the details of a movie -->\r\n\r\n<div class=\"movie-description\">\r\n	<div>Movie Name: "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Year: "
    + alias3(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Duration: "
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Rating: "
    + alias3(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rating","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Director: "
    + alias3(((helper = (helper = helpers.director || (depth0 != null ? depth0.director : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"director","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<input type=\"button\" value=\"Add\" class=\"add\" />\r\n	<input type=\"button\" value=\"Remove\" class=\"remove\" />\r\n	<input type=\"button\" value=\"Edit\" class=\"edit\" />\r\n</div>";
},"useData":true});
})();