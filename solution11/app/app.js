'use strict';

angular.module('Solutions',['ngRoute']).
controller('Solution8', [function($scope){


	//This defines a variable name on your controller called 'yourName'
	/**
	* REFERENCE THIS VARIABLE IN HTML IN THE FOLLOWING WAYS:
	* 1.) 'controllerName'.yourName --> {{Solutions8.yourName}}
	* 2.) 'alias'.yourName --> {{soln.yourName}}
	**/
	this.memos = [];
	this.item = "";
	this.date = new Date();

	//This defines a method name on your controller called 'yourName'
	/**
	* REFERENCE THIS METHOD IN HTML IN THE FOLLOWING WAYS:
	* 1.) 'controllerName'.push() --> {{Solutions8.push()}}
	* 2.) 'alias'.push() --> {{soln.push()}}
	**/
	this.add = function(){
		this.memos.push(this.item);
		this.item="";
	};
}]);