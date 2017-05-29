(function() {
	function seekBar($document) {
		var calculatePercent = function(seekBar, event) {
			var offsetX = event.pageX - seekBar.offset().left;
			var seekBarWidth = seekBar.width();
			var offsetXPercent = offsetX / seekBarWidth;
			offsetXPercent = Math.max(0, offsetXPercent);
			offsetXPercent = Math.min(1, offsetXPercent);
			return offsetXPercent;
		};

		return {
			templateUrl: '/templates/directives/seek_bar.html',
			replace: true,
			restrict: 'E',
			scope: {
				onChange: '&'
			},
			link: function(scope, element, attributes) {
				scope.value = 0;
				scope.max = 100;

				var seekBar = $(element);

				attributes.$observe('value', function(newValue) {
					scope.value = newValue;
				});

				attributes.$observe('max', function(newValue) {
					scope.max = newValue;
				});

				var percentString = function () {
					var value = scope.value;
					var max = scope.max;
					var percent = value / max * 100;
					return percent + "%";
				};

				scope.fillStyle = function() {
					return {width: percentString()};
				};

				scope.thumbStyle = function() {
					return {left: percentString()};
				};

				scope.onClickSeekBar = function(event) {
					var percent = calculatePercent(seekBar, event);
					scope.value = percent * scope.max;
					notifyOnChange(scope.value);
				};

				scope.trackThumb = function() {
					$document.bind('mousemove.thumb', function(event) {
						var percent = calculatePercent(seekBar, event);
						scope.$apply(function() {
							scope.value = percent * scope.max;
							notifyOnChange(scope.value);
						});
					});
				var notifyOnChange = function(newValue) {
					if (typeof scope.onChange === 'function') {
						scope.onChange({value: newValue});
					}
				};
					$document.bind('mouseup.thumb', function() {
						$document.unbind('mousemove.thumb');
						$document.unbind('mouseup.thumb');
					});
				};
			}
		};
	}

	angular
		.module('blocJams')
		.directive('seekBar', ['$document', seekBar]);
})();

/*
These are the error messages produced from the code in it's current state:

[Error] null is not an object (evaluating 'currentBuzzObject.isPaused')
http://localhost:3000/scripts/services/SongPlayer.js:83
	(anonymous function) (angular.min.js:95)
	$apply (angular.min.js:149:449)
	(anonymous function) (angular.min.js:285:469)
	dispatch (jquery-3.2.1.min.js:3:10322)
[Error] Can't find variable: notifyOnChange
http://localhost:3000/scripts/directives/seekBar.js:51
	(anonymous function) (angular.min.js:95)
	$apply (angular.min.js:149:449)
	(anonymous function) (angular.min.js:285:469)
	dispatch (jquery-3.2.1.min.js:3:10322)
*/