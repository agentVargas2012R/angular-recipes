/*
1.) Parse JSON
2.) Build Module List
3.) Config phase 
4.) Check app
*/

(function loadScripts(){

   //read line by line in a text file
   var request = new XMLHttpRequest();
   request.open("GET", "/app/loader/dictionary.json", false);
   request.send(null)
   var modules = JSON.parse(request.responseText);

   var directory = './app/js';
     
   for (var module in modules){       
       var path = directory + "/" + modules[module]; 
       var myApp = angular.module('Main', ['oc.lazyLoad']);    
       myApp.controller("MainCtrl" , function($ocLazyLoad) {
          $ocLazyLoad.load(path);
       });
   } 
 })();