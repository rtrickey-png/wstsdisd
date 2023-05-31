AFRAME.registerComponent('play-pause-controls', {
  init: function () {
    let PLAYING = [0, 0];
    let COLORSESP = ['green', '#c8102e'];
    let COLORSING = ['green', '#c8102e'];
    let indexEsp = -1;
    let indexIng = -1;
    let vidEsp = document.querySelector('#vid-esp');
    let vidIng = document.querySelector('#vid-ing');
    //console.log(vidEsp);
    let controlsEsp = document.querySelector('#controls-esp');
    let controlsIng = document.querySelector("#controls-ing");
    //console.log(controlsEsp);
    //console.log(controlsIng);
    let audEsp = document.querySelector('#aud-esp');
    let audIng = document.querySelector('#aud-ing');
    //console.log(audEsp);
    //console.log(this.el.getAttribute('id'));
    let instrEsp = document.querySelector("#instructions-esp");
    let instrIng = document.querySelector("#instructions-ing");
    // console.log(instrEsp);
    // console.log(instrIng);

    controlsEsp.addEventListener('click', function(evt) {
      // if (!vidEsp.canplaythrough) {
      //   console.log("video not loaded yet");
      // } else {
        indexEsp = (indexEsp + 1) % COLORSESP.length;
        controlsEsp.setAttribute('material', 'color', COLORSESP[indexEsp]);
        if (PLAYING[0] == 0) {
          console.log('playing esp');
          vidEsp.play();
          audEsp.play();
          PLAYING[0] = 1;
        } else if (PLAYING[0] == 1) {
          console.log('pausing esp');
          vidEsp.pause();
          audEsp.pause();
          PLAYING[0] = 0;
        }
      //}
    });

    controlsIng.addEventListener('click', function(evt) {
      // if(!vidIng.canplaythrough) {
      //   console.log("video not loaded yet");
      // } else {
        indexIng = (indexIng + 1) % COLORSING.length;
        controlsIng.setAttribute('material', 'color', COLORSING[indexIng]);
        //console.log('inside controls de ingles');
        if (PLAYING[1] == 0) {
          console.log('playing esp');
          vidIng.play();
          audIng.play();
          PLAYING[1] = 1;
        } else if (PLAYING[1] == 1) {
          console.log('pausing esp');
          vidIng.pause();
          audIng.pause();
          PLAYING[1] = 0;
        }
      // }
      });
    //let camera = document.querySelector("#my-camera");
    // let videos = document.querySelectorAll('a-video'); // array of a-videos
    // let vidIng = document.querySelector('#vid-ing');
    // let audIng = document.querySelector('#aud-ing');
    // let controlsEsp = document.querySelector('#vid-esp-controls'); // MAKE This
    // let controlsIng = document.querySelector('#vid-ing-controls');
    // this.el.addEventListener('loadeddata')


  // this.el.addEventListener('click', function () {
  //   console.log('clicked');
  // });

  // tick: function() {

  //   if(vidEsp.canplay) {
  //     console.log("canplay vid Esp");
  //   }
  //   uf
    // console.log(camera.object3D.position);
    // if(camera.getAttribute('position').x == paella.getAttribute('position').x &&
    //     camera.getAttribute('position').z == paella-esp.getAttribute('position').z) {
    //       console.log('inside switch statement');
    //       switch(playing):
    //       case 0:
    //         vidEsp.play();
    //         audEsp.playSound();
    //         break;
    //       case 1:
    //         vidEsp.pause();
    //         audEsp.pauseSound();
    //         break;
    // }
  }
});
