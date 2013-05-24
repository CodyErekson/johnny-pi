var fs = require('fs');
var lame = require('lame');
var speaker = require('speaker');

//function to play given audio file
function playVoice(voiceFile){
	return {

		//play function
		play: function play() {
			console.log("Playing: " + voiceFile);
			var fn = "audio/" + voiceFile + ".mp3";
			fs.createReadStream(fn)
			  .pipe(new lame.Decoder)
			  .on('format', console.log)
			  .pipe(new speaker);
		},
	};
}

//Export as a module
module.exports = playVoice;
