'use strict';

angular.module('Solutions',['ngRoute']).
controller('Solution8', ['$scope', function($scope){


	//This defines a variable name on your controller called 'yourName'
	/**
	* REFERENCE THIS VARIABLE IN HTML IN THE FOLLOWING WAYS:
	* 1.) 'controllerName'.yourName --> {{Solutions8.yourName}}
	* 2.) 'alias'.yourName --> {{soln.yourName}}
	**/
	this.yourName = "Mike";
}]);