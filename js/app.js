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
		images: [
		{
			full: 'images/image.jpg'
			
		},
		{
			full: 'images/image2.jpg'
			
		}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Penatgonal Gem",
		price: 5.95,
		description: 'This is a pentagonal gem, yo',
		images: [
	     {
			full: 'images/image2.jpg'
		 },
		 {
			full: 'images/image2.jpg'
		 }
		],
		canPurchase: true,
		soldOut: false
	}
	];
})();