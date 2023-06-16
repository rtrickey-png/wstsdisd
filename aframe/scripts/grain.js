// grain player connected to a volume node

let VOLUME = -18;

const vol = new Tone.Volume(VOLUME).toDestination();
// make grain player and connect to audio
const track = new Tone.GrainPlayer({
  // https://ryanrickey.neocities.org/aframe/assets/sound/wstsdisd-intro-3-22-23.mp3
  url: "https://ryanrickey.neocities.org/aframe/assets/sound/el viento.mp3",
  grainSize: 1,
  volume: 1
}).connect(vol);

//console.log(track)

// make grain component
AFRAME.registerComponent('grain', {
  init: function () {
    // set up object variables for the object this component lives on and camera
    this.obj = this.el;
    this.cam = document.querySelector('#camera');
    this.player = track;
    this.output = vol;

    // add onClick/fuse listener to start/stop playback
    this.el.addEventListener('fusing', async () => {
      await Tone.start();
      if (track.started) {
        // console.log("track was already started");
        track.stop()
      } else {
        track.start();
      }
    });
  },

  // function that gets called every second
  tick: function() {
    let camPos = this.cam.getAttribute('position');
    let objPos = this.obj.getAttribute('position');

    // calculate distance between camera and object
    let dist = camPos.distanceTo(objPos);
    // track.grainSize = dist;
    // console.log(track.grainSize);

    // set the volume relative to the camera's distance from the object
    // closest = -6dB, farthest = -inf dB
    vol.volume.value = VOLUME - dist;
  }
});
