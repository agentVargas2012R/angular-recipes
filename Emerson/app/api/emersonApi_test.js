'use strict';

describe('emersonApp.api module', function() {

  beforeEach(module('emersonApp.api'));

  describe('emerson services', function(){
  	var scope,
          compile,
  			     controller,
                userServ;  			

    beforeEach(inject(function($compile, $rootScope, $controller) {
    	scope = $rootScope.$new();
    	controller = $controller;
      compile = $compile;
      
      var complicatedServMock = {
          authenticate: true,
          getUsers: function(){
            return ['igor', 'matt', 'nigel'];
          }
      };

      userServ = complicatedServMock;

    }));

/**
*  
*   THE ACCOUNTS SERVICE TEST CASES ARE DEFINED HERE
*
*/

    it("should have 5 accounts", inject(function(AccountSrv){      
      expect(AccountSrv.getAccounts().length).toBe(5);
    }));

    it("should be able to add an account to the Account Service", inject(function(AccountSrv){      
      expect(AccountSrv.getAccounts().length).toBe(5);
      var newAccount = {
        id:     6,
        website:    "HistoryChannel.com",
        company:  {
          "name":     "History Channel",
          "catchPhrase":  "Study the past to understand the future.",
          "bs":       "television"
        }
      };  

      AccountSrv.addAccount(newAccount);
      expect(AccountSrv.getAccounts().length).toBe(6);
    }));


    it("should be able to remove an account from the account service", inject(function(AccountSrv){      
      expect(AccountSrv.getAccounts().length).toBe(5);
      var retireAccount = {
        id:     1,
        website:    "abc.com",
        company:  {
          "name":     "ABC Studios",
          "catchPhrase":  "Only on ABC",
          "bs":       "television"
        }
       };
       AccountSrv.deleteAccount(retireAccount);
       expect(AccountSrv.getAccounts()).not.toContain(retireAccount.id);
    }));

    it("should be able to update an existing account", inject(function(AccountSrv){      
      expect(AccountSrv.getAccounts().length).toBe(5);
      var updateAccount = {
        id:     1,
        website:    "cbs.com",
        company:  {
          "name":     "CBS Studios",
          "catchPhrase":  "Only on CBS",
          "bs":       "television"
        }
       };
       AccountSrv.updateAccount(updateAccount);
       expect(AccountSrv.getAccounts()[0].website).toBe("cbs.com");

    }));
  });

/**
* LEAD TEST CASES
**/

  it("should have 5 leads", inject(function(LeadSrv){      
      expect(LeadSrv.getLeads().length).toBe(5);
    }));

    it("should be able to add an account to the Account Service", inject(function(LeadSrv){      
      expect(LeadSrv.getLeads().length).toBe(5);
      var newLead = {
        id:     6,
        name:     "Leanne Graham",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890"
      };  

      LeadSrv.addLead(newLead);
      expect(LeadSrv.getLeads().length).toBe(6);
    }));


    it("should be able to remove an account from the account service", inject(function(LeadSrv){      
      expect(LeadSrv.getLeads().length).toBe(5);
      var retireLead = {
        id:     1,
        name:     "Leanne Graham",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890"
       };
       LeadSrv.deleteLead(retireLead);
       expect(LeadSrv.getLeads()).not.toContain(retireLead.id);
    }));

    it("should be able to update an existing account", inject(function(LeadSrv){      
      expect(LeadSrv.getLeads().length).toBe(5);
      var updateLead = {
        id:     1,
        name:     "Leanne Graham2",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890"
       };
       LeadSrv.updateLead(updateLead);
       expect(LeadSrv.getLeads()[0].name).toBe("Leanne Graham2");
    }));

/**
* CONTACT TEST CASES
**/

  it("should have 5 Contacts", inject(function(ContactSrv){      
      expect(ContactSrv.getContacts().length).toBe(3);
    }));

    it("should be able to add an contact to the Account Service", inject(function(ContactSrv){      
      expect(ContactSrv.getContacts().length).toBe(3);
      var newContact = {
        id:     4,
        name:     "Leanne Graham",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890"
      };  

      ContactSrv.addContact(newContact);
      expect(ContactSrv.getContacts().length).toBe(4);
    }));


    it("should be able to remove a contact from the contact service", inject(function(ContactSrv){      
      expect(ContactSrv.getContacts().length).toBe(3);
      var retireContact = {
        id:     1,
        name:     "Leanne Graham",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890",
        website:    "FOX.com",
        company:  {
          "name":     "SUN",
          "catchPhrase":  "Florida Sports Network",
          "bs":       "television"
        }
       };
       ContactSrv.deleteContact(retireContact);
       expect(ContactSrv.getContacts()).not.toContain(retireContact.id);
    }));

    it("should be able to update an existing account", inject(function(ContactSrv){      
      expect(ContactSrv.getContacts().length).toBe(3);
      var updateContact = {
        id:     1,
        name:     "Leanne Graham2",
        username:   "sincere@april.biz",
        telephone:  "123.456.7890",
        website:    "FOX.com",
        company:  {
          "name":     "SUN",
          "catchPhrase":  "Florida Sports Network",
          "bs":       "television"
        }
       };
       ContactSrv.updateContact(updateContact);
       expect(ContactSrv.getContacts()[0].name).toBe("Leanne Graham2");
    }));
});