Problem1: You want increase performance by using lazy loading.

Solution: 
 - Use oclazyload


Resources:
 - https://oclazyload.readme.io/docs


Problem2: You want to load modules dynamically after the config phase.

Solution:

 - Use ocLazyLoader.js 
 - Load your dynamic modules through a json payload
 - Iterate through the json payload and pass them into ocLazyLoaderProvider
 - In your main controller, load all the modules that where defined in the configuration phase. 

 
