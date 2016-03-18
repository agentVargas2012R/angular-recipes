Problem: You want to refactor existing code to confirm to best practices.

Solution: 

Wrap your angular app in Closures 
Rather than using Anonymous functions, created named functions for your controllers.
Decouple your Controller logic from your angular by abstracting your code into separate functions and use the $inject method to inject special services.
Prefer using vm over a contextual this and place these at the top
Chain your modules (You have been doing this already)
Abstract as much business logic as possible to your services.
When defining your routes, assign controllers.
When defining custom directives, give them prefixes
When defining your controllers, return your host object above your functions









