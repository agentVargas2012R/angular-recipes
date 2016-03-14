Problem: You want to trouble shoot an existing issue but you are viewing a minified file.

Solution: Use the unminified version of the angular library, that is:

- angular.min.js --> minified version

- angular.js --> unminified version. 

Changed your reference from:

```html
<script src="/bower_components/angular/angular.min.js"/>
```
### TO

```html
<script src="/bower_components/angular/angular.js"/>
```
