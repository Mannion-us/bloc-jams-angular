//<!--	Providers are services used by Angular modules to either configure or define default behavior for a certain Angular module.  -->
(function() {

	function config($stateProvider, $locationProvider) {

		$locationProvider	//<!--	Configure paths  -->//
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'LandingCtrl as landing', 
				templateUrl: '/templates/landing.html'
			})
		$stateProvider
			.state('album', {
				url: '/album',
				controller: 'AlbumCtrl as album',
				templateUrl: '/templates/album.html'
			})
		$stateProvider
			.state('collection', {
				url: '/collection',
				controller: 'CollectionCtrl as collection',
				templateUrl: '/templates/collection.html'
			});
	}

	angular
		.module('blocJams', ['ui.router'])
		.config(config);
	})();