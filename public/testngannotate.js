angular.module("app")
.factory("RequestService",["$http",function ($http){
	"use strict";
	return {
		pseudo: "benoit",

		getAll : function(){
			var res = $http({
				method: "GET",
				url:"http://192.168.229.21:3000/games"
			}).then(
				function(result){
					console.log("success RequestsService",result)
					var resultModifie = angular.copy(result.data);
					/*for (var i = resultModifie.length - 1; i >= 0; i--) {
						resultModifie[i].name = angular.uppercase(resultModifie[i].name);
					};*/
					return(resultModifie);
				})
			.then(function(games){
				return games.filter(function(game){
					return !game.user2 ||
					(game.user1.pseudo === this.pseudo
						|| game.user2.pseudo === this.pseudo)
				}.bind(this))
			}.bind(this))
			return res;//en cas d'erreur
		},

		join : function(game){
			game.user2 = {
				pseudo: this.pseudo
			};
			return $http.put("http://192.168.229.21:3000/games"+"/"+game.id,game)
		},

		save : function(game){
			game.user1.pseudo = this.pseudo;
			return $http.post("http://192.168.229.21:3000/games",game)
				.then(function(result){
						console.log("success",result)
					})
			}

		}
}])