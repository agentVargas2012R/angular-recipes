'use strict';

angular.module('Solutions',['ngRoute']).

controller('MemoCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
	
	this.memoSrv = memoSrv;
	this.todos = memoSrv.getMemos();

	//TODO: Refactor the code to support a hash literal.
	this.item = {};
	this.item.task = "";

	this.currentDate = new Date();
	
	this.add = function(){
		memoSrv.addEntry(this.item)
		this.item = "";
		memoSrv.notify();
	};
}]).

controller('MemoHistoryCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
		var controller = this;
		controller.lastEntry = memoSrv.lastEntry();
		$scope.pastDue = 127.39;

		memoSrv.subscribe($scope, function updateMemos(){
			controller.lastEntry = memoSrv.lastEntry();
		});
}]).

controller('BillingCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
		var controller = this;
		controller.pastDue = 127.39;
}]).

factory('MemoSrv', function($rootScope){
	return {	
				//notify both controllers changes can happen.			
				subscribe: function(scope, callback) {
					var handler = $rootScope.$on('MemoSrv-Event', callback);
					scope.$on('$destroy', handler)	
				},
				notify: function(){
					$rootScope.$emit('MemoSrv-Event');	
				},
				//TODO: Updated to support objects
				data: [
					{task: "Walk the dog",
					 completed: true}, 
					{task: "Do the laundry",
					 completed: true}, 
					{task: "Goto the Grocery Store",
					 completed: false}
				],
				getMemos: function(){
					return this.data;	
				}, 
				addEntry: function(item){
					this.data.push(item);
					return this.data;
				},
				//TODO: Reference the object properties that are set on the object.
				lastEntry: function(){
					return this.data[this.data.length - 1].task;
				}
	};
}).

//TODO: ABSTRACT OUT YOUR CODE TO A SEPERATE TEMPLATE LIKE THIS USING DIRECTIVES.
directive("memoHistory" , function(){
	return {
		restrict: 'E',
		templateUrl: '/app/templates/history.html'
 	}
}). 

directive("tasks", function(){
	return {
		'restrict': 'E',
		'templateUrl': '/app/templates/tasks.html'

	}
}).
//TODO: CREATES AN ATTRIBUTE DIRECTIVE.
directive("tracking", function(){
	return {
		'restrict': 'A',
		'link': function(scope, element, controller){
			//history.push(element, null, window.location);
		}
	}
}).

directive("payment", function($compile){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ngModel: "=",
		},
		link: function(scope, elemnt, attr, ctrl){
			console.log(scope);
			//debugger;
		},
		templateUrl: '<h3 class="text-right text-danger">Past Due: {{ngModel | currency}}</h3>'
	}
});
