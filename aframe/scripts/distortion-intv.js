// import { scaleToRange } from '../helpers.js';

// console.log(scaleToRange)

const disto = new Tone.Distortion(0.7).toDestination();

AFRAME.registerComponent('distortion-intv', {
  init: function () {
    // console.log(disto);
    // console.log(this.data);

    // console.log(grainComponent);

    this.obj = this.el;
    this.cam = document.querySelector("#camera");
    this.player = document.querySelector('[grain]').components.grain.output;
    // this.scaler = this.el.components["scaler"];
    // console.log(this.el.components["scaler"].scaleToRange(40));
    // console.log(document.querySelector('[scaler]').components)
    console.log(this.player);
    // console.log(this.scaler);
    this.player.connect(disto);

  },

  tick: function () {
    let camPos = this.cam.getAttribute('position');
    let objPos = this.obj.getAttribute('position');

    let dist = camPos.distanceTo(objPos);

    // TODO: scale this value in a way that makes sense
    // also, make a reverb or something! put onto tracks!
    disto.distortion = 1 - (0.10 * dist); // currently, if greater than 1 distance away then distortion is 100%
    console.log(disto.distortion)
  }
})
