// how can I grab onto the song from a different component?
// do I need to have a player component that each effect component is connected to?

// NOTE: this component is in progress.
const panner = new Tone.Panner3D(this.el.object3D.position.x,
  this.el.object3D.position.y, this.el.object3D.position.z);

AFRAME.registerComponent('panner3D', {
  init: function () {

    // track.start()


    this.obj = this.el;
    this.cam = document.querySelector('#camera');

    this.el.addEventListener('fusing', async () => {
      await Tone.start();
      if (track.started) {
        console.log("track was already started");
        track.stop()
      } else {
        track.start();
      }
    });
  },

  tick: function() {
    let camPos = this.cam.getAttribute('position');
    let objPos = this.obj.getAttribute('position');
    let dist = camPos.distanceTo(objPos);
    track.grainSize = dist;
    console.log(track.grainSize);
    // sets the volume relative to the camera's distance from the object
    // closest = -6dB, farthest = -inf dB
    // vol.volume.value = -6 - dist;
  }
});
