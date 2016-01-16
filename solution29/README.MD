Problem: You want to pass objects to your directive.

Solution: Use Element Directives to abstract out your functionality and leverage the scopes equality binding setting

- Ceate an element directive using 'E' restrict type
- Use the 'templateUrl' to reference a path directive to the current location of the file
- Run this on a browser to avoid CORS issues
- Create a scope hash and bind your variables to the directive using the = sign. 

WARNING: Pay attention to the scopes and how you pass data into them. This part of angular is CHALLENGING.