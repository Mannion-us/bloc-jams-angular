(function() {
	function AlbumCtrl(Fixtures) {
		this.albumData = Fixtures.getAlbum();
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();

//	git commit -m "angular-checkpoint-6-Services-Part-1:  completed"