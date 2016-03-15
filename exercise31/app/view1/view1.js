'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
	this.someVariable = "it works";
	this.collection = [];
	this.add = function(item){
		this.collection.push(item);
		return this.collection;
	}
}])

.filter("even", function(){
	return function(input, even){
		var result = [];
		for(var i = 0; i < input.length; i++){
			if(!(i%2 == 0)){
				result.push(input[i]);
			}
		}
		return result;
	}
});