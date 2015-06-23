angular.module("app").filter("nBang",function(){
			return function(input,entier){
				console.log(input,entier);
				return input+' '+"!".repeat(entier);//ES6/!\ 
			}

		})