    
'use strict';

var app = angular.module("preisvergleichApp.services", ['angular-hal'])
app.factory("ProduktService", ['halClient', function(halClient) {

     return {
	 'load' :
	     function() {
	     return halClient.$get('http://localhost:8080/');
	     }
     }
     
//     $resource('http://localhost:8080/produkte/:id', {
//     id : '@_id'
//     }, {
//     });

//    return $resource(
//	    'http://109.230.233.225:8080/PreisvergleichServer/produkte/:id', {
//		id : '@_id'
//	    }, {});
}]);



