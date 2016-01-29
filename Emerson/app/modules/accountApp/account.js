'use strict';

angular.module('emersonApp.accountApp', ['ngRoute', 'smart-table', 'emersonApp.api'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accountApp', {
    templateUrl: 'modules/accountApp/account.html',
    controller: 'AccountCtrl'
  });
}])

.controller('AccountCtrl', ['$scope', 'AccountSrv', function($scope, AccountSrv){	
 	this.rowCollection = AccountSrv.getAccounts(); 	
 	this.itemsByPage = 15;
 	var controller = this;
    controller.form = {};
    
    /**
    	website:    "HistoryChannel.com",
        company:  {
          "name":     "History Channel",
          "catchPhrase":  "Study the past to understand the future.",
          "bs":       "television"
        }
    */    
    controller.account = {};
    controller.account.company = {};
    
    controller.addRow = function addRow(row){
        //debugger;
        angular.element("#close").trigger('click');

        var newObj  = AccountSrv.addAccount(row);
        controller.rowCollection.push(newObj);
        
    };

    controller.removeRow = function removeRow(row) {
        var index = controller.rowCollection.indexOf(row);
        if (index !== -1) {
            controller.rowCollection.splice(index, 1);
        }        
        AccountSrv.deleteAccount(row);
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

        AccountSrv.updateAccount(row);
    };
}])

