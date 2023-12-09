```package
faces=github:grandpabond/pxt-faces
```

# Faces Extension
We all like to use Emojis to express what we are feeling.
Let your micro:bit do the same with the ``||faces:faces||`` extension!


Sometimes a change of expression is only temporary (like a laugh or a wink).
Other times it show a more permanent change of mood (like a sulk).
All the ``||faces:faces||`` blocks give you that choice. 

Your micro:bit may want to run some other code while temporarily changing its expression.
All the blocks let you either wait or return immediately, undoing the temporary change in the background.  

## Showing a Face
```sig
faces.showFace(eyes,mouth)
```
This block displays a new face with a selected expression.

> ``||faces:eyes||`` - chooses from a selection of eyes.

> ``||faces:mouth||`` - chooses which mouth to show.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily show the new face,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Changing the Eyes
```sig
faces.showEyes(eyes)
```
This block changes just the eyes on your micro:bit's face.

> ``||faces:eyes||`` - chooses from a selection of eyes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily show the new eyes,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Changing the Mouth
```sig
faces.showMouth(mouth)
```
This block changes just the mouth on your micro:bit's face.

> ``||faces:mouth||`` - chooses from a selection of different mouth shapes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily show the new mouth,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Looking Around
```sig
faces.look(upDown,leftRight)
```
This block adjusts the eyes to look in a chosen direction.

> ``||faces:upDown||`` - adjusts them vertically.

> ``||faces:mouth||`` - adjusts them horizonally.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily glance in the chosen direction.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Showing a Face
```sig
faces.rollEyes(direction)
```
This block rolls the eyes in the chosen direction.

> ``||faces:direction||`` - chooses from a selection of eyes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily show the new face,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Winking
```sig
faces.wink(leftEye,ms, wait)
```

This block lets you wink the chosen eye, regardless of what face is currently showing.
the default wink takes 750ms, but you can optionally change this.

> ``||faces:isLeft||`` - (a boolean) if true: winks the left eye, else the right.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily show the new face,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
> Open this page at [https://grandpabond.github.io/pxt-faces/](https://grandpabond.github.io/pxt-faces/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/grandpabond/pxt-faces** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/grandpabond/pxt-faces** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
