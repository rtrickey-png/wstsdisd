AFRAME.registerComponent('show-when-loaded', {
  // events: {
  //   canplay: function onCanPlay(evt) {
  //     console.log("canplay");
  //     this.el.setAttribute('visible', true);
  //   },
  //   loadstart: function onLoadStart(evt) {
  //     console.log("loadstart");
  //     this.el.setAttribute('visible', true);
  //   }
  // },
  init: function () {


    this.el.addEventListener('loadstart', function(evt) {
      console.log("loadstart");
      this.el.setAttribute('visible', false);
    });
    this.el.addEventListener('canplay', function(evt) {
      console.log("canplay");
      this.el.setAttribute('visible', true);
    });
    // this.videos = document.querySelectorAll('a-video');
    // let instrEsp = document.querySelector("#instructions-esp");
    // let instrIng = document.querySelector("#instructions-ing");
    // console.log(instrEsp);
    // console.log(instrIng);

    // let vidEsp = document.querySelector('#vid-esp');
    // let vidIng = document.querySelector('#vid-ing');

    // function makeInvisible(evt) {
    //   console.log("loading started");
    //   // make instructions invisible
    //   // this.object3D.visible = false;
    //   this.el.object3D.visible = false;
    // }
    // console.log(this.el);
    // vidIng.object3D.visible = true;
  // this.el.addEventListener('loadstart', makeInvisible);
  // this.el.addEventListener('loadeddata', (evt) => {
  //   console.log("loadeddata");
  //   this.el.setAttribute('visible', true);
  // });
    // vidEsp.addEventListener('loadstart', makeInvisible);
    // vidIng.addEventListener('loadstart', makeInvisible);
    //
    // vidEsp.addEventListener('canplaythrough', makeVisible);
    // videIng.addEventListener('canplaythrough', makeVisible);
  }


});
