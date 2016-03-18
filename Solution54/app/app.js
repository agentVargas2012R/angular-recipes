'use strict';

angular.module('Solutions',['ngRoute']).

controller('MemoCtrl', MemoCtrl).
controller('BillingCtrl', BillingCtrl).
//REFACTOR THIS TO USE ANGULAR STYLE GUIDES 1.x
factory('MemoSrv', MemoSrv).
//REFACTOR THIS TO USE ANGULAR STYLE GUIDES 1.x
directive("tasks", function(){
	return {
		'restrict': 'E',
		'templateUrl': '/app/templates/tasks.html'

	}
}).
//REFACTOR THIS TO USE ANGULAR STYLE GUIDES 1.x
controller('MemoHistoryCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
		var controller = this;
		controller.lastEntry = memoSrv.lastEntry();
		controller.pastDue = 127.39;

		memoSrv.subscribe($scope, function updateMemos(){
			controller.lastEntry = memoSrv.lastEntry();
		});
}]).
//REFACTOR THIS TO USE ANGULAR STYLE GUIDES 1.x
component("memoHistory" , {
	templateUrl: '/app/templates/history.html'
});

MemoCtrl.$inject = ['$scope', 'MemoSrv'];
function MemoCtrl($scope, memoSrv){
	//debugger;
	var vm  = this;
	vm.memoSrv = memoSrv;
	vm.todos = memoSrv.getMemos();

	//TODO: Refactor the code to support a hash literal.
	vm.item = {};
	vm.item.task = "";

	vm.currentDate = new Date();
	
	vm.add = function(){
		memoSrv.addEntry(this.item)
		vm.item = "";
		memoSrv.notify();
	};
}

BillingCtrl.$inject = ['$scope'];
function BillingCtrl($scope){
	var controller = this;
	controller.pastDue = 127.39;
}


MemoSrv.$inject=['$rootScope'];
function MemoSrv($rootScope){
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
}


