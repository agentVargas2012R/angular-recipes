'use strict';

angular.module('Solutions',['ngRoute', 'ngResource']).

config(['$routeProvider', function($routeProvider) {
  		
  $routeProvider.when('/memo', {
    templateUrl: '/app/templates/memo.html',
    controller: 'MemoCtrl'
  }).when('/calc', {
    templateUrl: '/app/templates/memo.html',
    controller: 'MemoCtrl'
  }).otherwise({ redirectTo: '/' });
}]).

controller('MemoCtrl', ['$q', '$scope', 'MemoSrv', function($q, $scope, memoSrv){
	
	this.memoSrv = memoSrv;
	var controller = this;
//----> 1.] add a success callback on the getMemos page which assigns a response object to controller.memos
//----> 2.] add a failure callback on the getMemos page and log an error 	
	var memosPromised = memoSrv.getMemos()

//----> 3.] add a success callback on the getMemos page which assigns a response object to controller.todos
//----> 4.] add a failure callback on the getMemos page and log an error 	

	var todosPromised = memoSrv.getTodos()

//----> 4.] synchronize the previous two calls and execute a log statement that says all service calls completed.
//----> 5.] add a failure callback on the getMemos page and log an error
//----> 6.] Use the $q object and its all method. Pass in both promsises 	
	

	//TODO: Refactor the code to support a hash literal.
	this.item = {};
	this.item.task = "";

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

//Invokes Service Here: http://jsonplaceholder.typicode.com/comments
factory('MemoSrv', ['$rootScope', '$http', function($rootScope, $http){
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
				getMemos: function(){
					//debugger;	
					return $http.get("http://jsonplaceholder.typicode.com/comments");
				},
				//http://jsonplaceholder.typicode.com/todos
				getTodos: function(){
					//debugger;	
					return $http.get("http://jsonplaceholder.typicode.com/todos");
				},
				//TODO: EXERCISE, FIX THIS SO THAT IT WORKS WITH THE JSON RESPONSE. 
				addEntry: function(item){
					this.data.push(item);
					return this.data;
				},
				//TODO: Reference the object properties that are set on the object.
				lastEntry: function(){
					return this.data[this.data.length - 1].task;
				}
	};
}]).

//TODO: This returns the last element in the last.
filter('lastEntry',  function(){
	return function(input, item){
		if(item == true){
			var result = [];
			//debugger;
			result.push(input[input.length - 1]);	

			return result;
		}else{
			return input;
		}
	};
});
