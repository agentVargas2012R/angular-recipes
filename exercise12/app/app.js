'use strict';

angular.module('Solutions',['ngRoute']).
controller('Solution12', [function($scope){


	//This defines a variable name on your controller called 'yourName'
	/**
	* REFERENCE THIS VARIABLE IN HTML IN THE FOLLOWING WAYS:
	* 1.) 'controllerName'.yourName --> {{Solutions8.yourName}}
	* 2.) 'alias'.yourName --> {{soln.yourName}}
	**/
	this.memos = [];
	this.item = "";
	this.currentDate = new Date();

	//This defines a method name on your controller called 'add'
	/**
	* REFERENCE THIS METHOD IN HTML IN THE FOLLOWING WAYS:
	* 1.) 'controllerName'.add() --> {{Solutions8.add()}}
	* 2.) 'alias'.add() --> {{soln.add()}}
	**/
	this.add = function(){
		this.memos.push(this.item);
		this.item="";
	};
}]);