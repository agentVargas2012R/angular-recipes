'use strict';
angular.module('Solutions', ['ui.router','smart-table']).

config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {  		
   $stateProvider        
    .state('login', {
        url: '/login',
        templateUrl: '/app/templates/login.html',
        controller: 'LoginCtrl',
    })

    .state('memo', {
        url: '/memo',
        templateUrl: '/app/templates/memo.html',
        controller: 'MemoCtrl',
        controllerAs: 'soln',
        resolve: { 
        			 auth:  function(AuthSrv){
			            return AuthSrv.authenticate();
			         },
        		 }
    }).state('tables',{
    	url: '/tables',
    	templateUrl: '/app/templates/table.html',
    	controller: 'TableCtrl'
    });

    $urlRouterProvider.otherwise('/login');
}]).

controller('TableCtrl', ['$scope', 'DataSrv', function($scope, DataSrv){
	//debugger;
 	this.rowCollection = DataSrv.getData();
 	this.itemsByPage = 15;
 	var controller = this;
    this.removeRow = function removeRow(row) {
        var index = controller.rowCollection.indexOf(row);
        if (index !== -1) {
            controller.rowCollection.splice(index, 1);
        }
    }
}]).

controller('LoginCtrl', ['$scope', 'AuthSrv', function($scope, AuthSrv){	
	//debugger;	

	this.user = {} || user;
	//check if user is already authenticated
	AuthSrv.isLoggedIn(this.user);
	this.user.name = {};
	this.user.pwd = {};
	this.authenticate = function(){
		//debugger;
		AuthSrv.login(user);
	}	
}]).

controller('MemoCtrl', ['$q', '$scope', 'MemoSrv', 'auth', function($q, $scope, memoSrv, auth){

	//debugger;
	$scope.auth = auth.value;
	this.memoSrv = memoSrv;
	var controller = this;
	var memosPromised = memoSrv.getMemos().success(function(response) {
		//debugger;						      
		controller.memos = response;
		
	}).error(function(error){
		console.error(error);
	});					

	var todosPromised = memoSrv.getTodos().success(function(response){
		controller.todos = response;
	}).error(function(error){

	});

	$q.all([memosPromised, todosPromised]).then(function(result){
		console.log("All service calls completed");
		//do coordinated stuff here.
	});

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

factory('DataSrv', [function(){
	return {
        nameList: ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName: ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'],
		getData: function(){
			var rowCollection = [];
		    for (var j = 0; j < 200; j++) {
				var
	            firstName = this.nameList[Math.floor(Math.random() * 4)],
	            lastName = this.familyName[Math.floor(Math.random() * 4)],
	            age = Math.floor(Math.random() * 100),
	            email = firstName + lastName + '@whatever.com',
	            balance = Math.random() * 3000;

		        rowCollection.push({
	            	firstName: firstName,
	            	lastName: lastName,
	            	age: age,
	            	email: email,
	            	balance: balance
	        	});
		    }
		    return rowCollection;		    
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
