'use strict';

// Declare app level module which depends on views, and components
angular.module('emersonApp', [
  'ngRoute',  
  'oc.lazyLoad',
  'emersonApp.api',
  'emersonApp.filters',
  'emersonApp.main',
  'emersonApp.leadApp',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/leadApp'});
}]);
