'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    var scope,
          compile,
             controller,
                userServ;       

    beforeEach(inject(function($compile, $rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller;
      compile = $compile;
      //EXERCISE 34 ALREADY COMPLETED FOR YOU.
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

    //Exercise 32: Test the add method defined on your controller. 
    it('should have a variable defined on it.', function(){
      var vm = controller("View1Ctrl", {scope: scope});
    });

    //Exercise 33: Test the even filter by passing a collection and verify that the correct even number of elements come back from it.
    it("should filter the content properly", inject(function(evenFilter){

    }));

    //Exercise 34: Mock authenticating and retrieve a user from the userServ
    it("should mock an object so that we can unit test on what matters", function(){

    });

    //Solution 35: Unit Test A Directive
    it("should test a directive", function(){
      //TRICK: is to compile the directive inline like this!!
      
    })

  });
});