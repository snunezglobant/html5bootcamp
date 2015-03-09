(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movie-list-template'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- Exercise 2 - Create a second template to render a list of movies. -->\r\n\r\n<div id=\"movie-list\">\r\n	Movie List: "
    + this.escapeExpression(((helper = (helper = helpers.movieList || (depth0 != null ? depth0.movieList : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"movieList","hash":{},"data":data}) : helper)))
    + "\r\n</div>\r\n";
},"useData":true});
})();