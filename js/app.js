(function() {
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This is a gem, yo',
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Penatgonal Gem",
		price: 5.95,
		description: 'This is a pentagonal gem, yo',
		canPurchase: true,
		soldOut: false
	}
	];
})();