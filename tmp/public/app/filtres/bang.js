angular.module("app").filter("bang",function(){
			return function (input){<!--on doit absolument avoir au moins ce paramètre-->
				return input+' !';
			}
		})