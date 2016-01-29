'use strict';

describe('emersonApp.filters module', function() {

  beforeEach(module('emersonApp.filters'));

  describe('emerson filters', function(){
  	var scope,
          compile,
  			     controller,
                userServ;  			

    beforeEach(inject(function($compile, $rootScope, $controller) {
    	scope = $rootScope.$new();
    	controller = $controller;
      compile = $compile;      
    }));

    //Solution 33: Testing Filters 
    it("should filter all leads out except for the matching one", inject(function(findLeadFilter){
      var data = [
        {
          id:         1,
          name:       "Leanne Graham",
          username:   "sincere@april.biz",
          telephone:  "123.456.7890"
        },  
        {
          id:         2,
          name:       "Jane Graham",
          username:   "jane@april.biz",
          telephone:  "223.456.7890"
        }
      ];
      var search = "Jane";
      var result = findLeadFilter(data, search);
      expect(result.length).toBe(1);

    }));

    //Solution 33: Testing Filters 
    it("should filter all accounts out except for abc", inject(function(findAccountFilter){
      var data = [
        {
          id:     1,
          website:    "abc.com",
          company:  {
            "name":     "ABC Studios",
            "catchPhrase":  "Only on ABC",
            "bs":       "television"
          }
        },
        {
          id:     2,
          website:    "nbc.com",
          company:  {
            "name":     "NBC Television",
            "catchPhrase":  "Only on NBC",
            "bs":       "television"
          }
        }
      ];
      var search = 1;
      var result = findAccountFilter(data, search);
      expect(result.length).toBe(1);
    }));

 
    //Solution 33: Testing Filters 
    it("should filter all contacts out except for the matching one", inject(function(findContactFilter){
      var data = [
        {
          id:         1,
          name:       "Leanne Graham",
          username:   "sincere@april.biz",
          telephone:  "123.456.7890",
          website:    "nbc.com",
          company:  {
            "name":         "NBC Television",
            "catchPhrase":  "Only on NBC",
            "bs":           "television"
          }
        },  
        {
          id:         2,
          name:       "Jane Graham",
          username:   "jane@april.biz",
          telephone:  "223.456.7890",
          website:    "nbc.com",
          company:  {
            "name":     "NBC Television",
            "catchPhrase":  "Only on NBC",
            "bs":       "television"
          }
        }
      ];
      var search = "Jane";
      var result = findContactFilter(data, search);
      expect(result.length).toBe(1);
    }));

  });
});