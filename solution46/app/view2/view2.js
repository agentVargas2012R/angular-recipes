'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]).
config(['$loadOnDemandProvider', function ($loadOnDemandProvider) {

	//TODO: Abstract out to a JSON object that iterates through the list of 
	//dynamic modules
	//debugger;
	var request = new XMLHttpRequest();
    request.open("GET", "/app/loadModules.json", false);
    request.send(null)
    var dynamicModules = JSON.parse(request.responseText);
    $loadOnDemandProvider.config(dynamicModules);
}])

.controller('View2Ctrl', [function() {
	debugger;
	this.modules = [];
	var request = new XMLHttpRequest();
	request.open("GET", "/app/loadModules.json", false);
    request.send(null)
	this.modules = JSON.parse(request.responseText);
}]);