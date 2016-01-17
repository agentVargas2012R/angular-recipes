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
    });

    //Solution 32: Testing collections and methods
    it('should have a variable defined on it.', function(){
      var vm = controller("View1Ctrl", {scope: scope});
      var collection = vm.add("test");
      expect(collection.length).toBe(1);
    });

    //Solution 33: Testing Filters 
    it("should filter the content properly", inject(function(evenFilter){
      var vm = controller("View1Ctrl", {scope: scope});
      var collection = vm.add("test");
      var result = evenFilter(collection);
      expect(result.length).toBe(0);

    }));

  });
});