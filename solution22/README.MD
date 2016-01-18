Problem: You want to create an angular app that is easer for crawlers to interpret by providing hasnbang urls.  

Solution: Use $locationProvider.html5Mode(true)

- Configure your routeProvider as your normally would.

- inject the $locationProvider as a second parameter to your application.

- in your html, reference angular links like normal application links

- define a base tag.


