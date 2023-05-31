AFRAME.registerComponent('play-pause-controls-agile', {
  init: function () {
    let PLAYING = 0;
    let COLORS = ['green', '#c8102e'];
    let index = -1;
    let vid = document.querySelector('a-video');
    console.log(vid);
    let ctrl = document.querySelector('#controls');
    console.log(ctrl);
    let aud = document.querySelector('#poem-aud');
    console.log(aud);
    let instr = document.querySelector("#instructions");
    console.log(instr);

    ctrl.addEventListener('click', function(evt) {
      // if (!vidEsp.canplaythrough) {
      //   console.log("video not loaded yet");
      // } else {
        index = (index + 1) % COLORS.length;
        ctrl.setAttribute('material', 'color', COLORS[index]);
        if (PLAYING == 0) {
          console.log('playing');
          vid.play();
          aud.play();
          PLAYING = 1;
        } else if (PLAYING == 1) {
          console.log('pausing');
          vid.pause();
          aud.pause();
          PLAYING = 0;
        }
    });
  }
});
