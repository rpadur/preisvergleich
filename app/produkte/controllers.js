var app = angular.module("preisvergleichApp.controllers", [ 'angular-hal' ]);
app.controller('ProduktCtrl', function($scope, $resource, ProduktService) {
    $scope.articles = [];
    $scope.neuesProdukt = {
	name : '',
	preis : ''
    };
    $scope.orderProp = 'name';
    var setup = function(pagenumber) {

	ProduktService.load().then(function(websiteResoure) {
	    return websiteResoure.$get('produkte', {
		'page' : pagenumber,
		'size' : 10,
		'sort' : null
	    }).then(function(resource) {
		$scope.page = resource.page;
		$scope.page.currentPage = $scope.page.number + 1;
		if (resource.page.totalElements == 0) {
		    return [];
		} else {
		    return resource.$get('produkte');
		}
	    }).then(function(produktListe) {
		$scope.articles = produktListe;
	    });
	});

    };

    setup(0);

    $scope.saveProdukt = function(name, preis) {
	console.log(name);
	console.log(preis);
	ProduktService.load().then(function(resource) {
	    var ergebnis = resource.$post('produkte', {}, {
		"name" : name,
		"preis" : preis
	    });
	    console.log(ergebnis);
	    return ergebnis;
	})
	$scope.articles.push({
	    name : $scope.neuesProdukt.name,
	    preis : $scope.neuesProdukt.preis
	})
	$scope.neuesProdukt = {
	    name : '',
	    preis : ''
	};

    };

    $scope.deleteProdukt = function(/** Integer */
    idx) {
	var produkt = $scope.articles[idx];
	produkt.$del('self');
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
    $scope.produkt = ProduktService.get({
	id : $scope.produktId
    });
})