'use strict';

angular.module('Solutions',['ngRoute']).
controller('Solution12', [function($scope){


	//TODO: Initialize your collection with a default entry
	this.memos = [];
	this.item = "";
	this.currentDate = new Date();

	this.add = function(){
		this.memos.push(this.item);
		this.item="";
	};
}]);