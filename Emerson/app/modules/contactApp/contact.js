'use strict';

angular.module('emersonApp.contactApp', ['ngRoute', 'smart-table', 'emersonApp.api'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactApp', {
    templateUrl: 'modules/contactApp/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', 'ContactSrv', function($scope, ContactSrv){   
    this.rowCollection = ContactSrv.getContacts();  
    this.itemsByPage = 15;
    var controller = this;
    controller.form = {};
    
    /**
        id:     1,
        name:     "Leanne Graham2",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890"
        website:    "FOX.com",
        company:  {
          "name":     "SUN",
          "catchPhrase":  "Florida Sports Network",
          "bs":       "television"
        }
    */    
    controller.contact = {};
    controller.contact.company = {};
    
    controller.addRow = function addRow(row){
        //debugger;
        angular.element("#close").trigger('click');

        var newObj  = ContactSrv.addContact(row);
        controller.rowCollection.push(newObj);
        
    };

    controller.removeRow = function removeRow(row) {
        var index = controller.rowCollection.indexOf(row);
        if (index !== -1) {
            controller.rowCollection.splice(index, 1);
        }        
        ContactSrv.deleteContact(row);
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

        ContactSrv.updateContact(row);
    };
}])

