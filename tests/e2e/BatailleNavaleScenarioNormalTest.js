describe('Bataille Navale Scenario Nominal',function(){
	it("Lorsque je clique sur New Game alors la page de création d'un nouveau jeu",function(){
		
		browser.ignoreSynchronization = true;

		browser.get('http://localhost:3000/');//on se positionne à une url

		expect(browser.getLocationAbsUrl()).toEqual('/');
		element(by.linkText('NewGame')).click();//on clique sur le lien avec le texte 'NewGame'
		expect(browser.getLocationAbsUrl()).toEqual('/newGame');

//console.log("aaaaaaaa");
console.log(by.model('newCtrl.game.name'));
		element(by.model('newCtrl.game.name')).sendKeys('Nom Game');
		element(by.model('newCtrl.game.user1.email')).sendKeys('mail@mail.mail');
		element(by.buttonText('Enregistrer')).click();
		element(by.linkText('Home')).click();
		expect(browser.getLocationAbsUrl()).toEqual('/');


//browser.get('http://juliemr.github.io/protractor-demo/');

//expect(browser.getTitle()).toEqual('Super Calculator');

	});
});