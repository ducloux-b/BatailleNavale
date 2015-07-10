angular.module("app")
.directive("dtaPhoto",function(){
	return {

		restrict: "E",
		template: "<div ng-click=\"e()\">ici, bientôt une photo {{ toto }}</div>",
		scope: {
			w:"=",
			str:"@",
			e:"&"
		},
		transclude : true,
		controller:"DtaPhotoController",
		link: function (scope, element, attrs) {
			element.css("color",attrs.couleur||'blue');

			element.css("borderStyle","solid");
			element.css("display","block");//pour changer la valeur par défaut qui est display inline

			scope.$watch("w",function(){
				element.css("borderWidth",scope.w+"px")
			})

			console.log(scope.str);
		}

	}
})
.controller("DtaPhotoController",function(){
	console.log("Je suis dans le controller")
})
.factory("DtaPhotoService",function(){
	console.log("Je suis dans le service")
})