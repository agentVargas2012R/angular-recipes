'use strict';

angular.module('emersonApp.main', ['ngRoute', 'oc.lazyLoad'])

.config(['$routeProvider', '$ocLazyLoadProvider', function($routeProvider, $ocLazyLoadProvider) {

  var request = new XMLHttpRequest();
  request.open("GET", "/app/modules/modules.json", false);
  request.send(null);
  var modules = JSON.parse(request.responseText);

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
   var request = new XMLHttpRequest();
   request.open("GET", "/app/modules/modules.json", false);
   request.send(null)
   this.modules = JSON.parse(request.responseText);
   var controller = this; 
   for (var module in this.modules){
   	
   	   var test = $ocLazyLoad;		
       $ocLazyLoad.load(controller.modules[module].path).then(function(){   				    
   			console.log(test);	
       });             
   }    
}]);