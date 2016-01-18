Problem: You want to force a user login using the ui state provider 

Solution: Create a state provider with a resolver

- create a login state

- create protected states

- add to the protected states a resolver which resolves to an authentication service

- Use local storage to see if the user has been authenticated. 
	- SEE AuthSrv and State Provider and LoginCtrl

Resources:
https://github.com/angular-ui/ui-router/wiki#resolve
