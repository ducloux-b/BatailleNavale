angular.module("app").filter("username",function(){
			return function(input){
				console.log(input);<!--BIEN PENSER A TESTER L ENTREE DU FILTRE-->
				if(input && input.name){return input.name;}
				if(input && input.email){return input.email;}
				return "John Doe";

				<!-- ou
				if(!input) return "John Doe";
				return input.name || input.email || "John Doe";
				-->
			}
		})