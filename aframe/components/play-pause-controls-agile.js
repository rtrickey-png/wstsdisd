AFRAME.registerComponent('play-pause-controls-agile', {
  init: function () {
    let PLAYING = 0;
    let COLORS = ['green', '#c8102e'];
    let index = -1;

    let video = document.querySelector('#video');
    // console.log(video.components);
    let audio = (video.components.sound);

    let ctrl = document.querySelector('#controls');

    // pause video and sound and set to start
    video.pause();
    audio.pauseSound();

    video.currentTime = 0.1;
    audio.currentTime = 0.1;

    ctrl.addEventListener('click', function(evt) {
      // if (!vidEsp.canplaythrough) {
      //   console.log("video not loaded yet");
      // } else {
        index = (index + 1) % COLORS.length;
        ctrl.setAttribute('material', 'color', COLORS[index]);
        if (PLAYING == 0) {
          // console.log('playing');
          video.play();
          audio.playSound();
          PLAYING = 1;
        } else if(PLAYING == 1){
          // console.log('pausing');
          video.pause();
          audio.pauseSound();
          PLAYING = 0;
        }
    });
  }
});
