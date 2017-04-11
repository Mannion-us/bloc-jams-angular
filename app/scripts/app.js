//<!--	Providers are services used by Angular modules to either configure or define default behavior for a certain Angular module.  -->
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
			.state('album', {	//<!--  Navigating using 'ui-view' directives required changing the URL in the browser in order  -->//
				url: '/album',	//<!--  to actually see this effect before making changes to 'href' tags to 'ui-sref' poorly     -->//
				templateUrl: '/templates/album.html'	//<!--   written curriculum content.  -->//
			});

	}

	angular
		.module('blocJams', ['ui.router'])
		.config(config);
	})();