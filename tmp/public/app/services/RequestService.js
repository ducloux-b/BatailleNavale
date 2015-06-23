angular.module("app")
.factory("RequestService",["$http",function ($http){
	"use strict";
	return {
		pseudo: "benoit",
		//apiUrl: "http://192.168.229.21:3000/games",
		apiUrl: "http://localhost:3000/games",
		getAll : function(){
			var res = $http({
				method: "GET",
				url:this.apiUrl
			}).then(
				function(result){
					console.log("success RequestsService",result);
					var resultModifie = angular.copy(result.data);
					/*for (var i = resultModifie.length - 1; i >= 0; i--) {
						resultModifie[i].name = angular.uppercase(resultModifie[i].name);
					};*/
					return(resultModifie);
				}).then(function(games){
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
			return $http.put(this.apiUrl+"/"+game.id,game)
		},

		save : function(game){
			//console.log(apiUrl)
			console.log(this.apiUrl)
			game.user1.pseudo = this.pseudo;
			return $http.post(this.apiUrl,game).then(function(result){
						console.log("success",result)
					})
			},

		get : function(id){
			var res = $http.get(this.apiUrl+"/"+id).then(
				function(result){
					console.log(result.data);
					var resData = angular.copy(result.data);
					return resData;
				})
			return res;
		},

		prepare : function(game){

		}

		}
}])