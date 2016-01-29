'use strict';

angular.module('emersonApp.leadApp', ['ngRoute', 'smart-table', 'emersonApp.api'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leadApp', {
    templateUrl: 'modules/leadApp/lead.html',
    controller: 'LeadCtrl'
  });
}])

.controller('LeadCtrl', ['$scope', 'LeadSrv', function($scope, LeadSrv){	
 	this.rowCollection = LeadSrv.getLeads(); 	
 	this.itemsByPage = 15;
 	var controller = this;
    controller.form = {};
    controller.lead = {};

    controller.addRow = function addRow(row){
        //debugger;
        angular.element("#close").trigger('click');

        var newObj  = LeadSrv.addLead(row);
        controller.rowCollection.push(newObj);
        
    };

    controller.removeRow = function removeRow(row) {
        var index = controller.rowCollection.indexOf(row);
        if (index !== -1) {
            controller.rowCollection.splice(index, 1);
        }        
        LeadSrv.deleteLead(row);
    };

    controller.open = function(index){
        var currentIndex;    
        if(typeof index == "number"){
            currentIndex = index;    
        }else{
            currentIndex = (index.id - 1);
        }
        //debugger;
        var $angularSelector = angular.element(".custom-"+currentIndex);        
        $angularSelector.closest('tr').find(":input").removeAttr("readOnly");
        $angularSelector.closest('tr').find(".update").show();        
        $angularSelector.closest('tr').find(":input").not(':button').css("background", "white");
        //debugger;

    };

    controller.updateRow = function updateRow(index, row){
        //debugger;
        var $angularSelector = angular.element(".custom-"+index);        
        $angularSelector.closest('tr').find(":input").attr("readOnly", "readOnly");
        $angularSelector.closest('tr').find(".update").hide();        
        $angularSelector.closest('tr').find(":input").not(':button').css("background", "transparent");

        LeadSrv.updateLead(row);
    };
}])

.directive('emersonDummyContent', function(){
    return {
        restrict: 'E',
        templateUrl: 'modules/common.html'
    };
});