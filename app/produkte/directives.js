var app = angular.module("preisvergleichApp.directives", []);

app.directive('preis', function() {
	return {
		restrict : 'E',
		scope : {
			value : '='
		},
		template : '<span ng-show="value == 0">kostenlos</span>'
				+ '<span ng-show="value > 0">{{value / 100 | currency}}</span>'
	}
})