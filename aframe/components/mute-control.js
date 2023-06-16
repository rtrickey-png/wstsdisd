AFRAME.registerComponent('mute-control', {
  schema: {
      soundId: {default: 'none'},
      color: {default: 'violet'}
  },

  init: function() {
    let PLAYING = 0;
    let COLORS = ['white', this.data.color];
    let index = 0;
    let el = this.el;


    // this.playing = false;
    // let sound = el.getAttribute('sound');
    // console.log(sound);
    let sound = document.querySelectorAll(this.data.soundId)[0];
    console.log(sound);
    let audio = sound.components['sound'];
    console.log(audio)
    // // console.log(stems)
    // // console.log(el.data.components.sound)
    // // let sound = stems[this.data.soundIndex].components.sound;
    // let sound = stems[0].components.sound;
    // console.log(sound)
    // console.log(this.el.parentElement);
    // let parent = this.el.parentElement;
    // console.log(parent.children);

    // const startSong = () => {
    //
    // }
    // console.log(sound)
    // console.log(this.el.getAttribute('sound'));
    el.sceneEl.addEventListener('playsong', function(evt) {
      console.log("received playsong event");
      index = 1;
      el.setAttribute('color', COLORS[index]);
      audio.playSound();
    });

    el.sceneEl.addEventListener('pausesong', function(evt) {
      console.log("received pausesong event");
      index = 0;
      el.setAttribute('color', COLORS[index]);
      PLAYING = 0;
      sound.pause();
    });

    el.sceneEl.addEventListener('resumesong', function(evt) {
      console.log("received resumesong event");
      index = 1;
      el.setAttribute('color', COLORS[index]);
      PLAYING = 1;
      sound.play()
    });

    el.addEventListener('click', function(evt) {
      // if the song is paused and an orb gets clicked, should it resume the song?
      console.log("orb clicked");
      index = (index + 1) % COLORS.length;
      el.setAttribute('color', COLORS[index]);

      if (sound.isPlaying) {
        console.log("soundEl is playing");
        sound.volume = 0;
      }

      else if (!sound.isPlaying) {
        console.log("soundEl is not playing");
        sound.volume = 1;
      }


      // if(!sound.isPlaying) {
      //   this.sound.playSound();
      // }
      //
      // if(this.sound.volume == 0) {
      //   this.sound.volume = 1;
      // }
      //
      // else { // this.playing == true
      //   this.sound.volume = 0;
      // }
    });
  }
})
