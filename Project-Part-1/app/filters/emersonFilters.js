angular.module("emersonApp.filters", ['ngRoute']).
filter('findLead',  function(){
	return function(input, item){
		var result = [];
		for(var i =0; i < input.length;  i++){
			if(input[i].name.indexOf(item) >= 0){
				result.push(item);
			}
		}
		return result;
	};
}).
filter('findContact',  function(){
	return function(input, item){
		var result = [];
		for(var i =0; i < input.length;  i++){
			if(input[i].name.indexOf(item) >= 0 ||
					input[i].username.indexOf(item) >= 0 ||
						input[i].website.indexOf(item) >= 0 ||
				 			input[i].telephone.indexOf(item) >= 0){
				result.push(item);
			}
		}
		return result;
	};
}).
filter('findAccount',  function(){
	return function(input, item){
		var result = [];
		for(var i =0; i < input.length;  i++){
			if(input[i].id == item){
				result.push(input[i]);
			}
		}
		return result;
	};
});