angular.module('emersonApp.api',['ngRoute']).
factory('LeadSrv', function(){
	return {
		getLeads: function(){
				return this.leads;
		},
		updateLead: function(updateLead){
			for(lead in this.leads){
				if(this.leads[lead].id == updateLead.id){
					this.leads[lead] = updateLead;
				}
			}
		},
		deleteLead: function(deleteApp){
			for(lead in this.leads){
				if(this.leads[lead].id == deleteApp.id){
					this.leads[lead].delete;
				}
			}	
		},
		addLead: function(addLead){
			addLead.id = this.leads.length + 1;
			this.leads.push(addLead);
			return addLead;
		},
		leads: [
			{
				id: 		1,
				name: 		"Leanne Graham",
				username: 	"sincere@april.biz",
				telephone:  "123.456.7890"
			}, 	
			{
				id: 		2,
				name: 		"Jane Graham",
				username: 	"jane@april.biz",
				telephone:  "223.456.7890"
			},
			{
				id: 		3,
				name: 		"Marge Graham",
				username: 	"marge@april.biz",
				telephone:  "323.456.7890"
			},
			{
				id: 		4,
				name: 		"Joe Graham",
				username: 	"joe@april.biz",
				telephone:  "423.456.7890"
			},
			{
				id: 		5,
				name: 		"Ralph Graham",
				username: 	"sincere@april.biz",
				telephone:  "523.456.7890"
			},				
		]
	};	
}).
factory('AccountSrv', function(){
	return {
		getAccounts: function(){
				return this.accounts;
		},
		updateAccount: function(updateAccount){
			for(account in this.accounts){
				if(this.accounts[account].id == updateAccount.id){
					this.accounts[account] = updateAccount;
				}
			}
		},
		deleteAccount: function(deleteAcc){
			for(account in this.accounts){
				if(this.accounts[account].id == deleteAcc.id){
					this.accounts[account].delete;
				}
			}	
		},
		addAccount: function(addAcc){
			addAcc.id = this.accounts.length + 1;
			this.accounts.push(addAcc);
			return addAcc;
		},
		accounts: [
			{
				id: 		1,
				website:    "abc.com",
				company: 	{
					"name": 		"ABC Studios",
					"catchPhrase": 	"Only on ABC",
					"bs": 			"television"
				}
			},
			{
				id: 		2,
				website:    "nbc.com",
				company: 	{
					"name": 		"NBC Television",
					"catchPhrase": 	"Only on NBC",
					"bs": 			"television"
				}
			},
			{
				id: 		3,
				website:    "CNN.com",
				company: 	{
					"name": 		"CNN Television",
					"catchPhrase": 	"Your world",
					"bs": 			"television"
				}
			},
			{
				id: 		4,
				website:    "WDW.com",
				company: 	{
					"name": 		"Walt Disney World Television",
					"catchPhrase": 	"Dare to dream",
					"bs": 			"television"
				}
			},
			{
				id: 		5,
				website:    "FOX.com",
				company: 	{
					"name": 		"SUN",
					"catchPhrase": 	"Florida Sports Network",
					"bs": 			"television"
				}
			}]
		};	
}).
factory('ContactSrv', function(){
	return {
		getContacts: function(){
				return this.contacts;
		},
		updateContact: function(updateCon){
			for(contact in this.contacts){
				if(this.contacts[contact].id == updateCon.id){
					this.contacts[contact] = updateCon;
				}
			}
		},
		deleteContact: function(deleteCont){
			for(contact in this.contacts){
				if(this.contacts[contact].id == deleteCont.id){
					this.contacts[contact].delete;
				}
			}	
		},
		addContact: function(addCon){
			addCon.id = this.contacts.length + 1;
			this.contacts.push(addCon);
			return addCon;
		},
		contacts: [
			{
				id: 		1,
				name: 		"Leanne Graham",
				username: 	"sincere@april.biz",
				telephone:  "123.456.7890",
				website:    "FOX.com",
				company: 	{
					"name": 		"SUN",
					"catchPhrase": 	"Florida Sports Network",
					"bs": 			"television"
				}

			},
			{
				id: 		2,
				name: 		"Jane Graham",
				username: 	"jane@april.biz",
				telephone:  "223.456.7890",
				website:    "nbc.com",
				company: 	{
					"name": 		"NBC Television",
					"catchPhrase": 	"Only on NBC",
					"bs": 			"television"
				}
			},
			{
				id: 		3,
				name: 		"Marge Graham",
				username: 	"marge@april.biz",
				telephone:  "323.456.7890",
				website:    "WDW.com",
				company: 	{
					"name": 		"Walt Disney World Television",
					"catchPhrase": 	"Dare to dream",
					"bs": 			"television"
				}
			}
		]
	};
});