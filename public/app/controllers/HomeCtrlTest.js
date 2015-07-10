describe("HomeCtrl Tests",function(){

	beforeEach(function(){
		module('app');
	});

	it("HomeCtrl.prepare redirige vers /prepare/idgame",inject(function($controller,$location){
		var homeCtrl = $controller('HomeCtrl');
		var game = { id:123 };

		homeCtrl.prepare(game);
		expect($location.path()).toEqual('/prepare/'+game.id);
	}));	

});