describe("RequestService Tests",function(){

	beforeEach(function(){
		module('app');
	});

	it("Le service doit être en 0.0.1",inject(function(RequestService){
		expect(RequestService.version).toEqual('0.0.1');
	}));

	it("Le service RequestService.get(1) renvoie un objet Game",inject(function(RequestService,$httpBackend){
		var idGame = 1;
		var gameSimule = {id:109,name:'Game 1'};

		$httpBackend.when('GET','http://localhost:3000/games/'+idGame).respond(gameSimule);

		var gamePromesse = RequestService.get(idGame);

		gamePromesse.then(function(game){
			expect(game.id).toEqual(109);
			expect(game.name).toEqual('Game 1');
		})


		$httpBackend.flush();
	}));	

});