

angular.module('emersonApp.main', ['ngRoute', 'oc.lazyLoad'])

.config(['$routeProvider', '$ocLazyLoadProvider', function($routeProvider, $ocLazyLoadProvider) {
  
  var modules = getData();
  $ocLazyLoadProvider.config({
    debug: true,
    modules: modules
  });

  $routeProvider.when('/main', {
    templateUrl: 'index.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', '$ocLazyLoad', '$location',function($scope, $ocLazyLoad, $location) {
   this.modules = getData();
   var controller = this; 
   for (var module in this.modules){
       //debugger;  	
   	   var test = $ocLazyLoad;		
       $ocLazyLoad.load(controller.modules[module].path).then(function(){   				    
        //debugger;
   			console.log(test);	
       });             
   }    
}]);

function getData(){
return [{
    "name": "emersonApp.accountApp",
    "path": "modules/accountApp/account.js",
    "displayName": "accountApp",
    "description": "Accounts"
  }, {
      "name": "emersonApp.contactApp",
      "path": "modules/contactApp/contact.js",
      "displayName": "contactApp",
      "description": "Contacts"
  }]

}