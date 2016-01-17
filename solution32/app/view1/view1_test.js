'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
  	var scope,
  			controller,
          userServ;  			

    beforeEach(inject(function($rootScope, $controller) {
    	scope = $rootScope.$new();
    	controller = $controller;

      var complicatedServMock = {
          authenticate: true,
          getUsers: function(){
            return ['igor', 'matt', 'nigel'];
          }
      };

      userServ = complicatedServMock;

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

    //Solution 34: Mocking Objects
    it("should mock an object so that we can unit test on what matters", function(){
      var contract = userServ.getUsers();
      expect(typeof contract[0] == 'string');
      
      //do whatever you would need to in order to test.
    });


  });
});