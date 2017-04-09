<!--	Providers are services used by Angular modules to either configure or define default behavior for a certain Angular module.  -->
(function() {
	function config($stateProvider, $locationProvider) {
	}
	angular
		.module('blocJams', ['ui.router'])
		.config(config);
	})();