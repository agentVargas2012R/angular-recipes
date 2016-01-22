'use strict';

angular.module('Solutions',['ngRoute']).

controller('MemoCtrl', ['$scope', 'MemoSrv', function($scope, memoSrv){
	
	this.memoSrv = memoSrv;
	this.memos = memoSrv.getMemos();

	this.item = "Default Value";
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

		memoSrv.subscribe($scope, function updateMemos(){
			controller.lastEntry = memoSrv.lastEntry();
		});
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
				//internal operations.
				data: ["Walk the dog", "Do the laundry", "Goto the Grocery Store"],
				getMemos: function(){
					return this.data;	
				}, 
				addEntry: function(item){
					this.data.push(item);
					return this.data;
				},
				lastEntry: function(){
					return this.data[this.data.length - 1]
				}
	};
});
