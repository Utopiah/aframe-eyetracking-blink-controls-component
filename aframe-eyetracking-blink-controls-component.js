var eyetracker;
var el;
AFRAME.registerComponent('blink', {
  init: function () {
    el = this.el
    eyetracker = browser.magicleap.RequestEyeTracking()
    //eyetracker.eyes[0].oneye = blinkBuild
    console.log("eyetracker", eyetracker) 
    // eyetracker.eyes proprerly filled (cf log)
  },
  tick: function(){
    if (!eyetracker) return
    if (eyetracker) console.log("liveeye", eyetracker.eyes[0]) 
    
    var opacity = el.getAttribute("material", "opacity")
    if (eyetracker.eyes[0].blink){
      console.log("blinked") 
      el.setAttribute("color", "red")
    } else {
      el.setAttribute("color", "green")
    }

  }
});
