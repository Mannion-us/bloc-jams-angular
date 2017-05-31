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

					$document.bind('mouseup.thumb', function() {
						$document.unbind('mousemove.thumb');
						$document.unbind('mouseup.thumb');
					});
				};

				var notifyOnChange = function(newValue) {
					if (typeof scope.onChange === 'function') {
						scope.onChange({value: newValue});
					}
				};
			}
		};
	};

	angular
		.module('blocJams')
		.directive('seekBar', ['$document', seekBar]);
})();

/***************************************************************************
*
*  Item #1 of the assignment was completed without any need to 'format' 
* the 'value' for displaying the 'element'.
*
*  Item #2 of the assignment was also completed without any need to address 
* 'a future feature' of 'onChange()' similar to an earlier defined directive 
* element attribute.
*
*  Item #3 of the assignment was clarified to mean the 'arguments' passed 
* into the directives elements need to be reflective in exact detail to 
* those 'keys' originating from the passed function.  The term 'hash' meaning 
* a 'key': 'value' pairing representative of an angular 'object', not 
* necessarily the entire 'object' but rather a single pairing or more than 
* one pairing.  They simply need to be consistently passed to avoid being 
* 'mis-compiled' thus failing to be 'defined' and producing 'errors'.
*
*  Item #4 of the assignment indicates that a 'dashed' format within the 
* 'view' is an angular specific process for dealing with the camelCase 
* standard of JavaScript's naming convention.  The 'dashed' format is 
* because the 'view' is 'html' which is 'case in-sensitive' and therefore 
* needs to be 'processed' by angular in order for the 'view' and the 
* JavaScript 'control' to operate together.
*
***************************************************************************/

/*  git checkout -b angular-assignment-10-Directives-Part-2  */