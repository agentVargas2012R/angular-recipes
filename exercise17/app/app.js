'use strict';

angular.module('Solutions',['ngRoute']).

controller('MemoCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
	
	this.memoSrv = memoSrv;
	this.todos = memoSrv.getMemos();

	//TODO: Refactor the code to support a hash literal.
	this.item = "";


	this.currentDate = new Date();
	
	this.add = function(){
		memoSrv.addEntry(this.item)
		this.item = "";
		memoSrv.notify();
	};

	var controller = this;

}]).

controller('MemoHistoryCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
		var controller = this;
		controller.lastEntry = memoSrv.lastEntry();
		controller.pastDue = 127.39;
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

				data: [
					"Walk the dog",
					
					"Do the laundry",
					
					"Goto the Grocery Store",
					
				],
				getMemos: function(){
					return this.data;	
				}, 
				addEntry: function(item){
					this.data.push(item);
					return this.data;
				},

				lastEntry: function(){
					return this.data[this.data.length - 1];
				}
	};
}).

//TODO: This returns the last element in the last.
filter('lastEntry',  function(){
	return function(input, item){
		var result = [];
		//debugger;
		result.push(input[input.length - 1]);	

		return result;
	};
});
