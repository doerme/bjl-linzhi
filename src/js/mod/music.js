var soundID = "bgMusic";
var soundID2 = "kaijianMusic";

function loadMisc() {
    createjs.Sound.registerSound("/bjl/misc/bgmusic1.mp3", soundID);
    createjs.Sound.registerSound("/bjl/misc/kaijiang.wav", soundID2);
    createjs.WebAudioPlugin.playEmptySound();
    window.musicReady = false;
    createjs.Sound.on("fileload", function () {
        // console.log();
        // window.musicReady = true;
        createjs.Sound.play(soundID, {
            loop: -1,
            volume: 0.5
        });

        // createjs.Sound.play(soundID2, {
        //     loop: -1
        //     // volume: 0
        // });
    }, this);
}
if (typeof wx != 'undefined') {
    wx.ready(function () {
        loadMisc();
    });
} else {
    loadMisc();
}

var o = {
    playBg: function () {
        // console.log();
        createjs.Sound.play(soundID, {
            loop: -1,
            volume: 0.5
        });
        // bgMusic.on("complete", this.handleComplete, this);
    },
    stopBg: function () {
        createjs.Sound.stop();
    },
    playTou: function () {
        createjs.Sound.play(soundID2, {
            // loop: -1
            volume: 1
        });
    }
}


export default o;