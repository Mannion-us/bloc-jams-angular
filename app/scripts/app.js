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
			.state('album', {	//<!--  Navigating using 'ui-view' directives required changing the URL in the browser in order  -->//
				url: '/album',	//<!--  to actually see this effect before making changes to 'href' tags to 'ui-sref' poorly     -->//
				templateUrl: '/templates/album.html'	//<!--   written curriculum content.  -->//
			})
		$stateProvider
			.state('collection', {
				url: '/',
				templateUrl: '/templates/collection.html'
			});
	}

	angular
		.module('blocJams', ['ui.router'])
		.config(config);
	})();

//<!--	'http://localhost:3000/collection' produced no 'view'.  -->
//<!--	However it did produce several console log error messages which are as follows:  -->
/*
GET 
http://localhost:3000/collection [HTTP/1.1 304 Not Modified 13ms]
GET 
http://fonts.googleapis.com/css [HTTP/1.1 200 OK 0ms]
GET 
http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css [HTTP/1.1 200 OK 0ms]
GET 
http://localhost:3000/styles/normalize.css [HTTP/1.1 304 Not Modified 5ms]
GET 
http://localhost:3000/styles/main.css [HTTP/1.1 304 Not Modified 4ms]
GET 
http://localhost:3000/styles/landing.css [HTTP/1.1 304 Not Modified 153ms]
GET 
http://localhost:3000/styles/collection.css [HTTP/1.1 304 Not Modified 152ms]
GET 
http://localhost:3000/styles/album.css [HTTP/1.1 304 Not Modified 152ms]
GET 
http://localhost:3000/styles/player_bar.css [HTTP/1.1 304 Not Modified 151ms]
GET 
https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js [HTTP/2.0 200 OK 0ms]
GET 
https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js [HTTP/2.0 200 OK 0ms]
GET 
http://localhost:3000/scripts/app.js [HTTP/1.1 304 Not Modified 385ms]
GET 
http://localhost:3000/assets/images/bloc_jams_logo.png [HTTP/1.1 304 Not Modified 383ms]
Unknown property ‘speak’.  Declaration dropped.  ionicons.min.css:11:19657
Error in parsing value for ‘-webkit-text-size-adjust’.  Declaration dropped.  normalize.css:17:28
Unknown pseudo-class or pseudo-element ‘-webkit-inner-spin-button’.  Ruleset ignored due to bad selector.  normalize.css:378:17
Unknown pseudo-class or pseudo-element ‘-webkit-search-cancel-button’.  Ruleset ignored due to bad selector.  normalize.css:397:17
Unknown pseudo-class or pseudo-element ‘-webkit-file-upload-button’.  Ruleset ignored due to bad selector.  normalize.css:407:2
GET 
http://localhost:3000/assets/images/blurred_backgrounds/blur_bg_3.jpg [HTTP/1.1 200 OK 1196ms]
Error: transition superseded
Stack trace:
v@https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js:7:15986
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
e@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:333
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:418
y/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:274
p@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:7:493
y/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:243
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
e/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:41:297
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
Y@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:77:52
hc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:63:500
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:133
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
ca@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:60:87
Pc/c/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:4
Mf/this.$get</m.prototype.$eval@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:176
Mf/this.$get</m.prototype.$apply@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:400
Pc/c/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:469
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
Pc/c@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:390
Pc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:179
ue@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:20:379
@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:332:117
b@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:38:36
 Possibly unhandled rejection: {}  angular.min.js:123:210
Error: transition prevented
Stack trace:
v@https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js:7:16033
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
e@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:333
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:418
y/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:274
p@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:7:493
y/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:243
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
e/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:41:297
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
Y@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:77:52
hc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:63:500
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:133
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
ca@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:60:87
Pc/c/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:4
Mf/this.$get</m.prototype.$eval@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:176
Mf/this.$get</m.prototype.$apply@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:400
Pc/c/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:469
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
Pc/c@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:390
Pc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:179
ue@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:20:379
@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:332:117
b@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:38:36
 Possibly unhandled rejection: {}  angular.min.js:123:210
Error: transition aborted
Stack trace:
v@https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js:7:16079
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
e@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:333
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:418
y/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:274
p@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:7:493
y/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:243
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
e/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:41:297
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
Y@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:77:52
hc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:63:500
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:133
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
ca@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:60:87
Pc/c/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:4
Mf/this.$get</m.prototype.$eval@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:176
Mf/this.$get</m.prototype.$apply@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:400
Pc/c/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:469
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
Pc/c@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:390
Pc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:179
ue@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:20:379
@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:332:117
b@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:38:36
 Possibly unhandled rejection: {}  angular.min.js:123:210
Error: transition failed
Stack trace:
v@https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js:7:16123
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
e@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:333
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:418
y/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:274
p@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:7:493
y/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:55:243
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
e/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:41:297
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
eb/I<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:45:464
d@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:43:92
Y@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:77:52
hc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:63:500
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:133
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
Na@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:62:307
ca@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:60:87
Pc/c/</<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:4
Mf/this.$get</m.prototype.$eval@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:176
Mf/this.$get</m.prototype.$apply@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:149:400
Pc/c/<@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:469
h/<.invoke@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:44:169
Pc/c@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:21:390
Pc@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:22:179
ue@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:20:379
@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:332:117
b@https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js:38:36
 Possibly unhandled rejection: {}  angular.min.js:123:210
*/
