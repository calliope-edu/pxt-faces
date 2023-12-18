```package
faces=github:grandpabond/pxt-faces
```

# Faces Extension
We all like to use Emojis to express what we are feeling.
Let your micro:bit do the same with the ``||faces:faces||`` extension!


Sometimes a change of expression is only temporary (like a laugh or a wink).
Other times it shows a more permanent change of mood (like a sulk).
Your micro:bit may want to run some other code while temporarily changing its expression.
All of the blocks let you either wait or return immediately, undoing the temporary change in the background.  

Your micro:bit will appear much more lifelike if it blinks occasionally. 
You can turn blinking on or off, and even change its rate and predictability.

## Showing a Face
```sig
faces.showFace(eyes,mouth)
```
This block displays a new face with a selected expression.

> ``||faces:eyes||`` - chooses from a selection of eyes.

> ``||faces:mouth||`` - chooses which mouth to show.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily 
show the new face, before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Changing the Eyes
```sig
faces.showEyes(eyes)
```
This block changes just the eyes on your micro:bit's face.

> ``||faces:eyes||`` - chooses from a selection of eyes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily 
show the new eyes, before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Changing the Mouth
```sig
faces.showMouth(mouth)
```
This block changes just the mouth on your micro:bit's face.

> ``||faces:mouth||`` - chooses from a selection of different mouth shapes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily 
show the new mouth, before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Looking Around
```sig
faces.look(upDown,leftRight)
```
This block adjusts the eyes to look in a chosen direction.

> ``||faces:upDown||`` - adjusts them vertically.

> ``||faces:leftRight||`` - adjusts them horizonally.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily 
glance in the chosen direction.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Rolling the Eyes
```sig
faces.rollEyes(direction)
```
This block rolls the eyes in the chosen direction.

> ``||faces:clockwise||`` - clockwise if true, else anti-clockwise.


## Winking
```sig
faces.wink(isLeft, ms, wait)
```
This block lets you wink the chosen eye, regardless of what face is currently showing.
The default wink takes 750ms, but you can optionally change this.

> ``||faces:isLeft||`` - (a boolean) if true: winks the left eye, else the right.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to wink for,
 before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately


### ~reminder
NOTE: when selecting eyes, it is **our** left & right, not the micro:bit's !
### ~

## Blinking
```sig
faces.blink(gap: number, vary: number, ms: number)
```
This block lets you control blinking, helping to show mood. A faster blink-rate appears 
more agitated. Longer blinks might indicate boredom or sleepiness. Random changes to the 
gap between blinks makes your micro:bit much more lifelike. 

> ``||faces:gap||`` - the average time (in millisecs) between blinks (if zero, stop blinking)

> ``||faces:vary||`` - the random variation in spacing of blinks (maximum +/- percentage) 

If you click on the "+", you can set an optional parameter: 

> ``||faces:ms||`` - new length of a blink (in millisecs)


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
