angular.module("app").controller('NewGameCtrl',function(RequestService,$scope){
	var ctrl=this;

	ctrl.optionsNbBateaux = [
	{valeur:1,label:'1 bateau'},
	{valeur:2,label:'2 bateaux'},
	{valeur:3,label:'3 bateaux'},
	{valeur:4,label:'4 bateaux'},
	{valeur:5,label:'5 bateaux'}
	];

	ctrl.jeux = [];

	ctrl.jeu = {
		fleetSize: ctrl.optionsNbBateaux[0].valeur
	}

	ctrl.nouvellePartie = function(formulaire){
		console.log(formulaire);
		if(formulaire.$valid){
			var clone = angular.copy(ctrl.jeu);//on clone l'objet
			console.log(clone);
			ctrl.jeux.push(clone);
			RequestService.save(clone);
			//peut aussi s'écrire:
			//$http.post(http://192.168.229.21:3000/games,clone)

		}
	}

	$scope.$watch("ctrl.title",function(newValue,oldValue){
	//on surveille une expression, donc on peut complexifier pour vérifier des conditions particulières
	//ex: "ctrl.title === 'yop'" à la place de "ctrl.title"
	//on peut aussi surveiller des objets par $watchCollection (ici, en particulier, c'est équivalent au $watch sur un objet avec un true (sans le true, ça surveille le pointeur))
		if (ctrl.title===undefined) return;//astuce pour éviter un affichage au chargement de la page
		console.log("changement! "+oldValue+'=>'+newValue);
	})

	})