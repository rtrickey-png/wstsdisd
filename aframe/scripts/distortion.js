// const gainNode = new Tone.Gain(-20).toDestination();
const dist = new Tone.Distortion(0.5).toDestination();
// dist.connect(gainNode);
// const fm = new Tone.FMSynth().connect(dist);
// const trees = new Tone.Player(document.querySelector("#aud-trees")).connect(dist);
const trees = new Tone.Player("https://ryanrickey.neocities.org/aframe/assets/sound/el viento.mp3");
trees.connect(dist);

// console.log(gainNode)
console.log(dist)
console.log(trees)

AFRAME.registerComponent('distortion', {
  init: function () {
    let DRYWET = [0, 1];
    let index = 0;
    trees.autostart = true;
    trees.loop = true;
    // trees.start()
    // add click listener
    this.el.addEventListener('fusing', async () => {
      await Tone.start();
      index = ((index + 1) % DRYWET.length);
      console.log('index was ' + index)
      switch(DRYWET[index]) {
        case(1):
          // index = index + 1 % DRYWET.length;
          // dist.disconnect();
          dist.wet.rampTo(0, 0.5);
          console.log('wet is now ' + dist.wet.value);
          break;
        case(0):
          dist.wet.rampTo(1, 0.5);
          console.log('wet is now ' + dist.wet.value);
          break;
        }

      // switch(trees.state) {
      //   case('started'):
      //     console.log('state is started')
      //     index = (index + 1) % DRYWET.length;
      //     // dist.set({
      //     //   wet: DRYWET[index]
      //     // });
      //     // console.log(dist.wet);
      //     dist.disconnect()
      //     break;
      //   case('stopped'):
      //     console.log('starting playback');
      //     trees.start();
      //     break;
      // }
      // fm.triggerAttackRelease("A3", "8n");
    })
  }
});
