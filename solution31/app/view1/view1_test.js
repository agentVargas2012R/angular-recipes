'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
  	var scope,
  			controller;  			

    beforeEach(inject(function($rootScope, $controller) {
    	scope = $rootScope.$new();
    	controller = $controller;
    }));

    it('should have a variable defined on it.', function(){
    	var vm = controller("View1Ctrl", {scope: scope});
    	expect(vm.someVariable !== null);
    })

  });
});