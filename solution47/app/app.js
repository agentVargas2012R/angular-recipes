'use strict';
angular.module('Solutions', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {  		
   $stateProvider        
    .state('memo', {
        url: '/memo',
        templateUrl: '/app/templates/memo.html',
        controller: 'MemoCtrl',
        controllerAs: 'soln'
       	});

    $urlRouterProvider.otherwise('/login');
}]).

controller('MemoCtrl', ['$scope', '$sce', function($scope, $sce){

	var controller = this;

	this.content= $sce.trustAsHtml("<input type='text' id='test' class='form-control' placeholder='test' />");
}]).

/**
Uses local storage in combination of mocked service calls to simulate authentication process.

Login Process is as follows:
- AuthSrv.login(user) which simulates a successful login
- AuthSrv.isLoggedIn checks if the user has been granted a token
- AuthSrv.logOut removes the token from local storage. 
- AuthSrv.authenticate checks if a user is logged in and redirects otherwise.
This is part of the resolvers for the UI state provider to ensure that this happens before
a view is loaded.
**/
factory('AuthSrv', ['$rootScope','$http','$q', '$state', function($rootScope, $http, $q, $state){
	return {
		login: function(user){
			//do service call here.
			//$http.get('/auth-token');			
			localStorage.setItem("user", user);			
			$state.go('memo');
		},
		isLoggedIn: function(user){
			var user = localStorage.getItem("user");
			if(user != null){
				$state.go('memo');
				debugger;		
			}
		},
		logOut: function(user){			
			$state.go('login');			
			localStorage.removeItem("user");		
		},
		authenticate: function(){			
			var user = localStorage.getItem("user");			
			if(user == null){
				$state.go('login');
			}
			return true;
		}
	}	
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
