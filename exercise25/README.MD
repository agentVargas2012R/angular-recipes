Problem: You want to coordinate multiple service calls

Solution: Use the $q promise object to coordinate multiple calls

- assign variables to each of your $http calls and return promises for each

- use $q.all([promise1, promise2]).then(function(result){
	//do stuff here
});

