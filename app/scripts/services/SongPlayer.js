(function() {
	function SongPlayer() {

/**
* @desc (Public) Public name for SongPlayer object
* @type {Object}
*/
		var SongPlayer = {};
/**
* @desc (Private) Private name for 'current song' designated object
* @type {Object}
*/
		var currentSong = null;
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
				currentBuzzObject.stop();
				currentSong.playing = null;
			}
			currentBuzzObject = new buzz.sound(song.audioUrl,{
				formats: ['mp3'],
				preload: true
			});
			currentSong = song;
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
* @function (Public) play
* @desc Plays a 'song' (new or current)
* @param {Object} song
*/
		SongPlayer.play = function(song) {
			if (currentSong !== song) {
				setSong(song);
				playSong(song);
			}
			else if (currentSong === song) {
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
			currentBuzzObject.pause();
			song.playing = false;
		};
		return SongPlayer;
	}



	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();