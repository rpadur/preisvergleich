'use strict';

describe("Produkt controller", function() {
    // This will contain all our test cases

    describe('ProduktCtrl', function() {
	var scope, ctrl, $resourceBackend, $produktServiceMock;

	// Load our app module definition before each test.
	beforeEach(module('preisvergleichApp'));

	// The injector ignores leading and trailing underscores here (i.e.
	// _$httpBackend_).
	// This allows us to inject a service but then attach it to a variable
	// with the same name as the service in order to avoid a name conflict.
	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _$produktServiceMock_) {
	    $httpBackend = _$httpBackend_;
	    $produktServiceMock = _$produktServiceMock_;
	    $produktServiceMock.expectQUERY('produkte/produkte.json').respond([ {
		name : 'Bananen'
	    }, {
		name : 'Kartoffeln'
	    } ]);

	    scope = $rootScope.$new();
	    ctrl = $controller('ProduktCtrl', {
		$scope : scope,
		$resource: $httpBackend,
		ProduktService: $produktServiceMock
	    });
	}));

	it('should create "produkt" model with 5 products', inject(function(
		$controller) {
	    var scope = {}, ctrl = $controller('ProduktCtrl', {
		$scope : scope,
		$resource : resource,
		$service : service

	    });

	    expect(scope.articles.length).toBe(5);
	}));
    })
});