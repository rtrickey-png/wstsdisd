// import * as Tone from 'tone'

const synth = new Tone.Synth({
  volume: -12, // -15dB
  oscillator: {
    type: 'square' // oscillator type square wave
  },
  envelope: {
    attack: 0.04, // envelope attack set to 40ms
    release: 1, // envelope release set to 1s
  }
}).toDestination()

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
    // attach an even listener to element for fuse from cursor
    // Tone.start()
    this.el.addEventListener('fusing', async () => {
      await Tone.start()
      console.log('audio is ready')
      synth.triggerAttackRelease(this.data.note, this.data.duration)
    })
  },

  // a new function to trigger our synth
  // trigger: function () {
    // tone.js function to trigger synth with given parameters
    // Tone.start();
    // synth.triggerAttackRelease(this.data.note, this.data.duration)
  // },

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
