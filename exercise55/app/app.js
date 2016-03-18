'use strict';

angular.module("accordian", []).
controller('MyCtrl', myCtrl).
service('TabSrv', TabSrv).
directive('componentView', [ '$compile', function($compile){
    return {        
        restrict: 'E',
        replace: true, 
        scope: {
            'render' : '='
        },
        link: function(scope, $element, $attrs){
            
        },
        templateUrl: '/app/templates/componentView.html'  
    }
}]).

directive('email', function(){
    return {        
        restrict: 'E',
        replace: true,
        templateUrl: '/app/templates/email.html'  
    }
}).

directive('contact', function(){
    return {        
        restrict: 'E',
        replace: true,
        templateUrl: '/app/templates/contact.html'  
    }
});

myCtrl.$inject = ['$scope', 'TabSrv'];

function myCtrl($scope, tabSrv) {
    //debugger;
    var vm = this;
    vm.tabs = tabSrv.getTabs();

    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
}

function TabSrv(){
    var service = {
        getTabs: getComponents
    };

    return service;

    // functions start here

    function getComponents(){
        return [{
                'label'         :    'Email',
                 'component'    :    'email'
                }, 
                {
                    'label'     :    'Form',
                    'component' :    'contact'
                }];
    }
}