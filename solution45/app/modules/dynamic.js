angular.module("dynamic", ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dynamic', {
    templateUrl: 'modules/dynamic.html',
    controller: 'DynamicCtrl'
  });
}]).

controller("DynamicCtrl", ["$scope", function($scope){	
	this.dynamicContent="Displaying DynamicContent Here";
}]);