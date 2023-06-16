AFRAME.registerComponent('start-stop-song', {

  init: function() {
    let PLAYING = 0;
    let STARTED = 0;
    let COLORS = ['green', '#c8102e'];
    let index = -1;
    let el = this.el;

    // this.playing = false;
    // let sound = el.getAttribute('sound');
    // console.log(sound);
    let stems = document.querySelectorAll('a-sound');

    // const startSong = () => {
    //
    // }
    // console.log(sound)
    // console.log(this.el.getAttribute('sound'));

    el.addEventListener('click', function(evt) {
      index = (index + 1) % COLORS.length;
      el.setAttribute('material', 'color', COLORS[index]);

      // console.log(el.emit)


      if(PLAYING == 0) {
        if(STARTED == 0){
          el.emit('playsong', {el: this.el});
          STARTED = 1;
        } else if(STARTED == 1) {
          el.emit('resumesong', {el: this.el});
        }
        stems.forEach(sound => {
            sound.play();
            console.log(sound.isPlaying);
        });
        // also, change colors of orbs
        PLAYING = 1;

      }

      else if (PLAYING == 1) { // this.playing == true
        el.emit('pausesong', {el: this.el});
        stems.forEach(sound => {
          sound.pause();
          console.log(sound.isPlaying);

        });
        PLAYING = 0;
      }
    });
  }
})
