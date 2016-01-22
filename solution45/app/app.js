'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'oc.lazyLoad',
  'ngRoute',
  'myApp.main',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);