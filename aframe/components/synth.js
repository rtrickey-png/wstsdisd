// import * as Tone from 'tone'
// synth settings adapted from https://codepen.io/jargharg/details/OvaYXY

const synth = new Tone.MonoSynth({
  //frequency: C4,
  volume: -15, // -15dB
  oscillator: {
    type: 'sine' // oscillator type square wave
  },
  envelope: {
    attack: 1, // envelope attack set to 1s
    decay: 1,
    sustain: .85,
    release: 1, // envelope release set to 1s
  },
  filterEnvelope: {
    attack: 0.05,
    decay: 0.3,
    sustain: 0.45,
    release: 3,
    baseFrequency: 100,
    octaves: 7,
    exponent: 1.3
  }
}).toDestination();

AFRAME.registerComponent('synth', {
  schema: {
  // Describe the property of the component.
    note: {
      type: 'string',
      default: 'C4' // C4 default note
    },
    duration: {
      type: 'string',
      default: '4n' // quarter note default
    }
  },

  init: function () {
    this.synthComponent = synth;
    let randomNoteLength = 1;

    // attach an even listener to element for fuse from cursor
    this.el.addEventListener('fusing', async () => {
      await Tone.start()
      // select a random note length
      randomNoteLength = Math.floor(Math.random() * 2.5 + 1);
      // play note
      synth.triggerAttackRelease(this.data.note, randomNoteLength);
    })
  },

  update: function () {
    // Do something when component's data is updated.

  },

  remove: function () {
    // Do something the component or its entity is detached.
  },
  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
