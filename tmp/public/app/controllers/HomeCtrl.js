angular.module("app").controller('HomeCtrl',function(RequestService,$scope,$location){
	var homeCtrl=this;

	function fetchGames() {
		RequestService.getAll()
			.then(function (games){
				homeCtrl.games = games;
			})
		}
	fetchGames();

	homeCtrl.join = function(game){
		RequestService.join(game)
			.then(function(){
				fetchGames()
			})
	}

	homeCtrl.prepare = function(game){
		$location.path("/prepare/"+game.id);
	}
})