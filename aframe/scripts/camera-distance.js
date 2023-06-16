AFRAME.registerComponent('camera-distance', {
init: function() {
  this.obj = this.el;
  this.cam = document.querySelector('#camera');
},

  tick: function () {
    // let cameraEl = this.el.sceneEl.camera.el;
    // console.log(cameraEl);
    let camPos = this.cam.getAttribute('position');
    let objPos = this.obj.getAttribute('position');
    // cameraEl.getAttribute('rotation');
    // console.log(cameraEl.getAttribute('position'));
    // console.log(cameraEl.getAttribute('rotation'));
    let dist = camPos.distanceTo(objPos);

  }
});
