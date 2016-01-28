'use strict';

angular.module('emersonApp.main', ['ngRoute', 'oc.lazyLoad'])

.config(['$routeProvider', '$ocLazyLoadProvider', function($routeProvider, $ocLazyLoadProvider) {

  //add code to look up the modules in the modules.json file.
  $routeProvider.when('/main', {
    templateUrl: 'index.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', '$ocLazyLoad', '$location',function($scope, $ocLazyLoad, $location) {
  //load each of the modules here.    
}]);