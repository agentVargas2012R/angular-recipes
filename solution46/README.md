Problem: You want to load modules dynamically after the config phase.

Solution:

 - Use loadOnDemand.js 
 - Load your dynamic modules through a json payload
 - Iterate through the json payload and pass them into loadOnDemandProvider
 - In html, iterate through the list of modules and pass the value to the directive.

 