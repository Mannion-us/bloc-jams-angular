<!--	Providers are services used by Angular modules to either configure or define default behavior for a certain Angular module.  -->
(function() {

	function config($stateProvider, $locationProvider) {

		$locationProvider	//<!--	Configure paths  -->//
			.html5Mode({
				enabled: true,	//<!--  Toggle this to hid URLs paths  -->//	//<!--  Do not toggle or will error in console  -->//
				requireBase: false
			});

		$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: '/templates/landing.html'
			})
			.state('album', {
				url: '/album',
				templateUrl: '/templates/album.html'
			});

	}

	angular
		.module('blocJams', ['ui.router'])
		.config(config);
	})();