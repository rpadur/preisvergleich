var app = angular.module("preisvergleichApp", [ 'ngResource', 'ngRoute',
	'preisvergleichApp.controllers', 'preisvergleichApp.directives',
	'preisvergleichApp.filters', 'preisvergleichApp.services' ]);
app.config(function($httpProvider) {
    // Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials = true;
    // Remove the header used to identify ajax call that would prevent CORS from
    // working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/produkte', {
	templateUrl : 'produkte/produkte.html',
	controller : 'ProduktCtrl'
    }).when('/produkte/:produktId', {
	templateUrl : 'produkte/produkt_detail.html',
	controller : 'ProduktDetailCtrl'
    }).otherwise({
	redirectTo : '/produkte'
    });
} ]);

app.config(['$provide', function($provide) {
    $provide.decorator('$locale', ['$delegate', function($delegate) {
      if($delegate.id == 'de-DE') {
            $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '\u00A4\u00a0-';
            $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = '';
            $delegate.NUMBER_FORMATS.PATTERNS[1].posPre = '\u00A4\u00a0';
            $delegate.NUMBER_FORMATS.PATTERNS[1].posSuf = '';
      }
      console.log($delegate.id);
      return $delegate;
    }]);
  }]);
_.mixin(s.exports());
