

angular.module('emersonApp.main', ['ngRoute', 'oc.lazyLoad'])

.config(['$routeProvider', '$ocLazyLoadProvider', function($routeProvider, $ocLazyLoadProvider) {
  
  var modules = getData();
  //debugger;
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
   //debugger;
   var controller = this; 
   for (var module in this.modules){
       //debugger;  	
   	   var test = $ocLazyLoad;		
       console.log(test);  
       $ocLazyLoad.load(controller.modules[module].path).then(function(){   				    
        //debugger;
   			console.log(test);	
       });             
   }    
}]);

function getData(){
   var modules = {};
   $.ajax({
      url: '/app/modules/modules.json',
      type: 'get',
      dataType: 'json',
      cache: false,
      success: function( data ) {
          //debugger;
          modules = data;   
      },
      async:false,
   });

   return modules;
}