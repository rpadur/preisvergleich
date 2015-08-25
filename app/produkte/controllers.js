var app = angular.module("preisvergleichApp.controllers", []);
app.controller('ProduktCtrl', function($scope, $resource, ProduktService) {
    $scope.orderProp = 'name';
    $scope.neuesProdukt = new ProduktService({});
    // Laden aller Produkte
    $scope.articles = ProduktService.query(function() {
	console.log($scope.articles);
    });

    $scope.saveProdukt = function(name, preis) {
	console.log(name);
	console.log(preis);
	
	
	
	$scope.neuesProdukt.$save();
	$scope.articles.push({

	    name : name,
	    preis : preis,
	    id: $scope.neuesProdukt.id
	});
	$scope.neuesProdukt.name = "";
	$scope.neuesProdukt.preis = "";
	$scope.neuesProdukt.id="";
    };

    $scope.deleteProdukt = function(/** Integer */
    idx) {

	$scope.articles.splice(idx, 1);
    };

    $scope.isEmpty = function(/** String */
    str) {
	return (!str || 0 === str.length);
    };

});

app.controller('ProduktDetailCtrl', function($scope, $routeParams,
	ProduktService) {
    $scope.produktId = $routeParams.produktId;
    $scope.produkt = ProduktService.get({id: $scope.produktId});
})