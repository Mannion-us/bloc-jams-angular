(function() {
	function SongPlayer($rootScope, Fixtures) {

/**
* @desc (Public) Public name for SongPlayer object
* @type {Object}
*/
		var SongPlayer = {};
/**
* @desc (Private) Information for current album
* @type {Object}
*/
		var currentAlbum = Fixtures.getAlbum();
/**
* @desc (Private) Buzz object audio file
* @type {Object}
*/
		var currentBuzzObject = null;
/**
* @function (Private) setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
		var setSong = function(song) {
			if (currentBuzzObject) {
				stopSong(SongPlayer.currentSong);
			}
			currentBuzzObject = new buzz.sound(song.audioUrl,{
				formats: ['mp3'],
				preload: true
			});

			currentBuzzObject.bind('timeupdate', function() {
				$rootScope.$apply(function() {
					SongPlayer.currentTime = currentBuzzObject.getTime();
				});
			});

			SongPlayer.currentSong = song;
		};
/**
* @function (Private) playSong
* @desc Plays the current Buzz object and sets playing property of the song object to true
* @param {Object} song
*/
		var playSong = function(song){
			currentBuzzObject.play();
			song.playing = true;
		};
/**
* @function (Private) getSongIndex
* @desc Get index of song in the songs array
* @param {Object} song
* @returns {Number}
*/
		var getSongIndex = function(song) {
			return currentAlbum.songs.indexOf(song);
		};
/**
* @function (Private) stopSong
* @desc Stop a song
* @param {Object} song
*/
		var stopSong = function(song) {
			currentBuzzObject.stop();
			song.playing = null;
		};
/**
* @desc (Public) Public name for 'current song' designated object
* @type {Object}
*/
		SongPlayer.currentSong = null;
/**
* @desc (Public) Current playback time (in seconds) of currently playing song
* @type {Number}
*/
		SongPlayer.currentTime = null;
/**
* @desc (Public) Public name for 'volume' object attribute
* @type {Number}
*/
		SongPlayer.volume = null;
/**
* @function (Public) play
* @desc Plays a 'song' (new or current)
* @param {Object} song
*/
		SongPlayer.play = function(song) {
			song = song || SongPlayer.currentSong;
			if (SongPlayer.currentSong !== song) {
				setSong(song);
				playSong(song);
			}
			else if (SongPlayer.currentSong === song) {
				if (currentBuzzObject.isPaused()) {
					playSong(song);
				}
			}
		};
/**
* @function (Public) pause
* @desc Pauses a 'song' (new or current)
* @param {Object} song
*/
		SongPlayer.pause = function(song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		};
/**
* @function (Public) previous
* @desc Set 'song' to previous 'song' in album
*/
		SongPlayer.previous = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;
			if (currentSongIndex < 0) {
				stopSong(SongPlayer.currentSong);
			}
			else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};
/**
* @function (Public) next
* @desc Set 'song' to next 'song' in album
*/
		SongPlayer.next = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;
		};
		return SongPlayer;
	}

/**
* @function (Public) setCurrentTime
* @desc Set current time (in seconds) of currently playing song
* @param {Number} time
*/
		SongPlayer.setCurrentTime = function(time) {
			if (currentBuzzObject) {
			currentBuzzObject.setTime(time);
			}
		};
/**
* @function (Public) setVolume
* @desc Set volume for songs
* @param {Number} volume
*/
		SongPlayer.setVolume = function (volume) {
			if (currentBuzzObject) {
				currentBuzzObject.setVolume(volume);
			}
			SongPlayer.volume = volume;
		};

	angular
		.module('blocJams')
		.factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();