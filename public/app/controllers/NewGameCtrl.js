angular.module("app").controller('NewGameCtrl',function(RequestService,$location){
	var newCtrl=this;

	newCtrl.optionsNbBateaux = [
	{valeur:1,label:'1 bateau'},
	{valeur:2,label:'2 bateaux'},
	{valeur:3,label:'3 bateaux'},
	{valeur:4,label:'4 bateaux'},
	{valeur:5,label:'5 bateaux'}
	];

	newCtrl.game = {
		fleetSize: newCtrl.optionsNbBateaux[0].valeur
	}

	newCtrl.save = function(formulaire){
		if (formulaire.$invalid) return;
		RequestService.save(newCtrl.game)
			.then(function () {$location.path("/")});
		}


})