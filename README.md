# aframe-eyetracking-blink-controls-component
Using blink in MagicLeap eye tracking system to realize an action

Note that this is a **pedagogical proof of concept**. This is in no way intended to be used in a production ready environment but solely to show that
- it is possible
- the ECS architecture keeps on being relevant in WebXR
- a pure javascript workflow for high end AR is possible including to the highest level of abstraction
The component itself could be a lot richer and reliable but this was not the point then.

In practice it means this component gets executed by exokit running node on the MagicLeap with native bindings.

## Code
```javascript
AFRAME.registerComponent('blink', {
  init: function () { eyetracker = browser.magicleap.RequestEyeTracking() },
  // browser.magicleap made available via exokit
  tick: function() {
    if (!eyetracker) return
    if (eyetracker.eyes[0].blink){ /* do something */ }
    // cf https://github.com/webmixedreality/exokit/blob/master/docs/magicleap.md
  }
});
```

## How does it work

![http://webmr.io/docs/architecture/](https://cdn.rawgit.com/webmixedreality/webmr-docs/media-upload/website/static/media/exokitmediacopy/architecture.jpg)

Video demo 

![https://www.youtube.com/watch?v=HolgnP7TRBI](http://fabien.benetou.fr/pub/home/WebARFOSDEM2019/blink-component-video-preview.jpg)
[Youtube link](https://www.youtube.com/watch?v=HolgnP7TRBI)

Live link https://exokit.glitch.me/blinkbuilder.html

Unmodified code ran during the demo https://glitch.com/edit/#!/exokit?path=blinkbuilder.html:9:13

Tested only on [exokit](https://github.com/webmixedreality/exokit) thanks to its [MagicLeap bindinds](https://github.com/webmixedreality/exokit/blob/master/docs/magicleap.md).

1st component on Github published ([0 code results](https://github.com/search?l=Markdown&q=registerComponent+aframe+magicleap&type=Code) on publication date). Presented Sunday February 3 at FOSDEM 2019 during [High end augmented reality using Javascript](https://fosdem.org/2019/schedule/event/machine_learning_javascript/). Please see the video recording and slides to better under the context and potential usage.

## Fosdem talk
Showing meshing, eye tracking, hand tracking, plane detection from the same API.
![https://fosdem.org/2019/schedule/event/machine_learning_javascript/](https://pbs.twimg.com/media/DyeNE7nXgAAZnoC.jpg)
