angular.module("app")
.controller('PrepareCtrl',function(RequestService,$routeParams){
	var prepareCtrl=this;

	var boats = [];

	var currentBoat={
		id:1,
		positions:[]
	}

	console.log("$routeParams.id:"+$routeParams.id);

	RequestService.get($routeParams.id).then(function(game){
		prepareCtrl.game = game;
		//prepareCtrl.game = game.data;

		prepareCtrl.rows = new Array(prepareCtrl.game.battlefieldSize.height);
		prepareCtrl.cols = new Array(prepareCtrl.game.battlefieldSize.width);

		prepareCtrl.battlefield=[];
		for (var i = 0 ; i < prepareCtrl.game.battlefieldSize.width; i++) {
			prepareCtrl.battlefield[i] = [];
			for (var j = 0 ; j < prepareCtrl.game.battlefieldSize.height; j++) {
				prepareCtrl.battlefield[i][j] = 0;
			}
		}

		console.log(prepareCtrl.battlefield);		

		console.log(prepareCtrl.game);
		console.log(prepareCtrl.rows);
		console.log(prepareCtrl.cols);
	})

	prepareCtrl.add = function(i,j){
		/*
		var somme = 0;
		for (var k = 0 ; k < prepareCtrl.game.battlefieldSize.width; k++) {
			for (var m = 0 ; m < prepareCtrl.game.battlefieldSize.height; m++) {
				somme += prepareCtrl.battlefield[k][m];
			}
		}
		if(somme<1){
			prepareCtrl.battlefield[i][j] = 1;
			}
		if((somme===1)
			&&(prepareCtrl.battlefield[i][j]===1)){
			prepareCtrl.battlefield[i][j] = 0;
		}
		*/
		if(currentBoat.id<=prepareCtrl.game.fleetSize){
			if (currentBoat.positions.length===0) {
				prepareCtrl.battlefield[i][j] = currentBoat.id;
				currentBoat.positions.push([i,j]);
				return
			};
			if (currentBoat.positions.length===2) {
				return
			};
			if (currentBoat.positions.length===1) {
				var i0 = currentBoat.positions[0][0];
				var j0 = currentBoat.positions[0][1];
				if(
					(i0===i && (j0===j-1 || j0===j+1))
					||(j0===j && (i0===i-1|| i0===i+1))
					){
						prepareCtrl.battlefield[i][j] = currentBoat.id;
						currentBoat.positions.push([i,j]);
						var cloneCurrentBoat = angular.copy(currentBoat);
						boats.push(cloneCurrentBoat);
						currentBoat.id++;
						currentBoat.positions = [];
						return
				};
			};
		};
	}

	prepareCtrl.checkReady = function(){
		if(!prepareCtrl.game){return false}
		var sommeBattlefield = 0;
		for (var k = 0 ; k < prepareCtrl.game.battlefieldSize.width; k++) {
			for (var m = 0 ; m < prepareCtrl.game.battlefieldSize.height; m++) {
				sommeBattlefield += prepareCtrl.battlefield[k][m];
			}
		}

		var somme = 0;
		for (var i = 1; i <= prepareCtrl.game.fleetSize; i++) {
			somme+= (i*2);
		};
		return(sommeBattlefield===somme);
	}

	prepareCtrl.reset = function(){
		prepareCtrl.battlefield=[];
		for (var i = 0 ; i < prepareCtrl.game.battlefieldSize.width; i++) {
			prepareCtrl.battlefield[i] = [];
			for (var j = 0 ; j < prepareCtrl.game.battlefieldSize.height; j++) {
				prepareCtrl.battlefield[i][j] = 0;
			}
		}
		currentBoat.id = 1;
		currentBoat.positions = [];
	}

	prepareCtrl.save = function(){

	}

})