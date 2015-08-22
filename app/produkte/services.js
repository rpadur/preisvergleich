var app = angular.module("preisvergleichApp.services", [])
app.factory("ProduktService", function($resource) {

     return $resource('http://localhost:8080/produkte/:id', {
     id : '@_id'
     }, {
     });

//    return $resource(
//	    'http://109.230.233.225:8080/PreisvergleichServer/produkte/:id', {
//		id : '@_id'
//	    }, {});
});
