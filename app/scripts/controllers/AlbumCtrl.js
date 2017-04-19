(function() {
	function AlbumCtrl() {
		this.albumData = angular.copy(albumPicasso);
		}
	}

	angular
		.module('blocJams')
		.controller('AllbumCtrl', AlbumCtrl);
})();