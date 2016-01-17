'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  //TODO: Navigates to a browser page
  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('todo', function() {

    beforeEach(function() {
      browser.get('index.html#/todo');
    });

    //TODO: Uses the Filter Input FIeld and verifies only one entry is left.
    it('should filter all the entries except for walk the dog', function() {
      element(by.name('search-field')).sendKeys('Walk').then(function(elements){
        browser.driver.findElements(By.name("todo")).then(function(result){
          expect(result.length).toBe(1);
        });  
      });
    });
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    //TODO: Checks for the page having an angular view on it.
    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });
    

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
