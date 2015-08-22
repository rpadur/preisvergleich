var app = angular.module("preisvergleichApp.filters", []);
app.filter("titleize", function() {
	return function(input) {
		return _.titleize(input);
	};
});