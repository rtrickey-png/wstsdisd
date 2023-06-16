const reverb = new Tone.Freeverb({
  roomSize: 0.98,
  dampening: 1000 }).toDestination();

AFRAME.registerComponent('reverb', {
  init: function () {
    this.reverb = reverb;
    console.log(this.reverb);
    this.instruments = document.querySelectorAll('[synth]');
    console.log(this.instruments)

    this.instruments.forEach(synth => {
      console.log(synth.components.synth.synthComponent)
      synth.components.synth.synthComponent.connect(this.reverb);
    });

  }
});
