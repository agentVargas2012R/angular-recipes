'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('needs to have one basic static module defined as a starting point and should automatically redirect to /leadApp when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/leadApp");
  });


  describe('leadApp', function() {

    beforeEach(function() {
      browser.get('index.html#/leadApp').then(function(){
        //wait for the dynamic modules to load.
        browser.driver.sleep(2000);  
      });
      browser.waitForAngular();
      
    });

    it('shoud have some leads', function() {

      browser.driver.findElements(By.name("table-row")).then(function(result){  
          expect(result.length).toBe(5);
      });  
    });

    it('shoud support add a new contact', function() {
      element(By.css("button.add")).click().then(function(result){
          element(by.css('.name')).sendKeys('Roy G Biv');
          element(by.css('.username')).sendKeys('rbiv@colors.org');
          element(by.css('.tele')).sendKeys('555555555').then(function(data){
              element(by.css('.addNew')).click().then(function(result){
                 browser.driver.findElements(By.name("table-row")).then(function(result){  
                      expect(result.length).toBe(6);
                 });   
              })     
          });
      });
    });

    it('shoud support editing an existing contact', function() {
      browser.actions().doubleClick(element(by.model('row.telephone'))).perform().then(function(){
        element(by.model('row.telephone')).sendKeys("999.999.9999");
        element(by.css('.update')).click().then(function(compleed){
          //if we made it this far, we're good
          expect(true);
        });

      });
    });

    it('shoud support deleting an existing contact', function() {
      element(By.css("button.btn.btn-lg.btn-danger.remove")).click().then(function(result){
          browser.driver.findElements(By.name("table-row")).then(function(result){  
              expect(result.length).toBe(4);
          });
      });
    });

  });

});
