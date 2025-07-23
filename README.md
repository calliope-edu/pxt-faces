You will find the English ReadMe at the end of the document.

# Faces Erweiterung

Um diese Erweiterung in MakeCode einzubinden, verwende diesen Link: https://github.com/calliope-edu/pxt-faces

Wir alle verwenden gerne Emojis, um auszudrücken, was wir fühlen.
Lass deinen Calliope mini das Gleiche mit der ``||faces:faces||`` Erweiterung tun!

Manchmal ist eine Veränderung des Gesichtsausdrucks nur vorübergehend (wie ein Lachen oder Zwinkern).
Manchmal zeigt sie eine dauerhaftere Stimmungsänderung (wie ein Schmollen).
Dein Calliope mini möchte vielleicht anderen Code ausführen, während er vorübergehend seinen Ausdruck ändert.
Alle Blöcke lassen dich entweder warten oder sofort zurückkehren, wobei die temporäre Änderung im Hintergrund rückgängig gemacht wird.

Dein Calliope mini wird viel lebensechter wirken, wenn er gelegentlich blinzelt.
Du kannst das Blinzeln ein- oder ausschalten und sogar seine Rate und Vorhersagbarkeit ändern.

## Ein Gesicht anzeigen
```sig
faces.showFace(eyes,mouth)
```
Dieser Block zeigt ein neues Gesicht mit einem gewählten Ausdruck an.

> ``||faces:eyes||`` - wählt aus einer Auswahl von Augen.

> ``||faces:mouth||`` - wählt, welcher Mund angezeigt werden soll.

Wenn du wiederholt auf das "+" klickst, kannst du optionale Parameter setzen:

> ``||faces:ms||`` - wenn größer als null, gibt dies an, wie lange (in Mikrosekunden) das neue Gesicht 
temporär angezeigt werden soll, bevor zum vorherigen Ausdruck zurückgekehrt wird.

> ``||faces:wait||`` - (ein Boolean) wenn wahr: warten, sonst sofort zurückkehren

## Die Augen ändern
```sig
faces.showEyes(eyes)
```
Dieser Block ändert nur die Augen auf deinem Calliope mini Gesicht.

> ``||faces:eyes||`` - wählt aus einer Auswahl von Augen.

Wenn du wiederholt auf das "+" klickst, kannst du optionale Parameter setzen:

> ``||faces:ms||`` - wenn größer als null, gibt dies an, wie lange (in Mikrosekunden) die neuen Augen 
temporär angezeigt werden sollen, bevor zum vorherigen Ausdruck zurückgekehrt wird.

> ``||faces:wait||`` - (ein Boolean) wenn wahr: warten, sonst sofort zurückkehren

## Den Mund ändern
```sig
faces.showMouth(mouth)
```
Dieser Block ändert nur den Mund auf deinem Calliope mini Gesicht.

> ``||faces:mouth||`` - wählt aus einer Auswahl verschiedener Mundformen.

Wenn du wiederholt auf das "+" klickst, kannst du optionale Parameter setzen:

> ``||faces:ms||`` - wenn größer als null, gibt dies an, wie lange (in Mikrosekunden) der neue Mund 
temporär angezeigt werden soll, bevor zum vorherigen Ausdruck zurückgekehrt wird.

> ``||faces:wait||`` - (ein Boolean) wenn wahr: warten, sonst sofort zurückkehren

## Umherblicken
```sig
faces.look(upDown,leftRight)
```
Dieser Block justiert die Augen, um in eine gewählte Richtung zu schauen.

> ``||faces:upDown||`` - justiert sie vertikal.

> ``||faces:leftRight||`` - justiert sie horizontal.

Wenn du wiederholt auf das "+" klickst, kannst du optionale Parameter setzen:

> ``||faces:ms||`` - wenn größer als null, gibt dies an, wie lange (in Mikrosekunden) vorübergehend 
in die gewählte Richtung geblickt werden soll.

> ``||faces:wait||`` - (ein Boolean) wenn wahr: warten, sonst sofort zurückkehren

## Augen rollen
```sig
faces.rollEyes(direction)
```
Dieser Block lässt die Augen in die gewählte Richtung rollen.

> ``||faces:clockwise||`` - im Uhrzeigersinn wenn wahr, sonst gegen den Uhrzeigersinn.


## Zwinkern
```sig
faces.wink(isLeft, ms, wait)
```
Dieser Block lässt dich mit dem gewählten Auge zwinkern, unabhängig davon, welches Gesicht gerade angezeigt wird.
Das Standard-Zwinkern dauert 750ms, aber du kannst dies optional ändern.

> ``||faces:isLeft||`` - (ein Boolean) wenn wahr: zwinkert mit dem linken Auge, sonst mit dem rechten.

Wenn du wiederholt auf das "+" klickst, kannst du optionale Parameter setzen:

> ``||faces:ms||`` - wenn größer als null, gibt dies an, wie lange (in Mikrosekunden) gezwinkert werden soll,
 bevor zum vorherigen Ausdruck zurückgekehrt wird.

> ``||faces:wait||`` - (ein Boolean) wenn wahr: warten, sonst sofort zurückkehren


### ~reminder
HINWEIS: Bei der Auswahl der Augen ist es **unser** links & rechts, nicht das des Calliope mini !
### ~

## Blinzeln
```sig
faces.blink(gap: number, vary: number, ms: number)
```
Dieser Block lässt dich das Blinzeln kontrollieren und hilft dabei, Stimmungen zu zeigen. Eine schnellere Blinzelrate 
wirkt aufgeregter. Längere Blinzler können Langeweile oder Schläfrigkeit anzeigen. Zufällige Änderungen der 
Pause zwischen den Blinzlern macht deinen Calliope mini viel lebensechter. Für zusätzlichen Realismus gibt es 
gelegentlich doppelte oder sogar dreifache Blinzler.

> ``||faces:gap||`` - die durchschnittliche Zeit (in Millisekunden) zwischen Blinzlern (wenn null, Blinzeln stoppen)

> ``||faces:vary||`` - die zufällige Variation im Abstand der Blinzler (maximale +/- Prozent) 

Wenn du auf das "+" klickst, kannst du einen optionalen Parameter setzen: 

> ``||faces:ms||`` - neue Länge eines Blinzlers (in Millisekunden)


## Beispiele
Typischerweise könnten die Gesichter, die dein Calliope mini macht, als Reaktion auf verschiedene äußere Reize sein, 
wie Licht, Lärm, Temperatur, Neigen oder Schütteln; --oder vielleicht einfach nur Langeweile oder Müdigkeit!.

### Stimmungsänderungen
Hier ist ein sehr einfaches Beispiel, um einige der ``||faces:faces||`` Blöcke in Aktion zu zeigen.

```blocks
// example script
faces.showFace(faces.Eyes.Open, faces.Mouth.Grin)
faces.blink(4000, 80, 250)
basic.pause(5000)
// sing wedding march
faces.showMouth(faces.Mouth.Open, 8000, false)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
basic.pause(5000)
// change mood progressively to angry
faces.blink(500, 80, 100)
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat)
basic.pause(2000)
faces.showFace(faces.Eyes.Up, faces.Mouth.Hmmm, 500)
basic.pause(2000)
faces.rollEyes(true)
faces.rollEyes(true)
basic.pause(2000)
faces.showFace(faces.Eyes.Mad, faces.Mouth.Sulk)
basic.pause(2000)
// shout funeral march
faces.showMouth(faces.Mouth.Shout, 4000, false)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
basic.pause(5000)
// recover...
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat)
faces.blink(0)
basic.pause(3000)
// happier now...
faces.showFace(faces.Eyes.Open, faces.Mouth.Ok)
basic.pause(5000)
// finish with a wink
faces.wink(false, 1000)
basic.pause(5000)
```
Nach dem Anzeigen eines fröhlichen Gesichts für 5 Sekunden mit eingeschaltetem langsamem Blinzeln wird der Mund geöffnet, 
um den Hochzeitsmarsch zu singen (schließt automatisch nach 8 Sekunden).

Nach einer kurzen Pause ändert sich die Stimmung schrittweise: das Blinzeln beschleunigt sich, die Augen rollen, und ein wütendes Gesicht wird gezeigt.

Wieder wird der Mund geöffnet, während der Trauermarsch herausgeschrien wird.

Da die Mundänderung nur vorübergehend war, wechselt der Mund nach 5 Sekunden automatisch zurück zum Schmollen.

Dann, nach einer 5-Sekunden-Pause, erholt sich die Stimmung allmählich, das Blinzeln wird ausgeschaltet und ein glücklicheres Gesicht kehrt zurück, 
das uns schließlich ein langsames Zwinkern schenkt.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
> Öffne diese Seite unter [https://calliope-edu.github.io/pxt-faces/](https://calliope-edu.github.io/pxt-faces/)

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* suche nach **https://github.com/calliope-edu/pxt-faces** und importiere

## Dieses Projekt bearbeiten

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc)
* klicke auf **Importieren** dann klicke auf **URL importieren**
* füge **https://github.com/calliope-edu/pxt-faces** ein und klicke auf importieren

#### Metadaten (verwendet für Suche, Darstellung)

* für PXT/Calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>






# Faces Extension

This extension is preloaded into the extension category into MakeCode, though you can also inlude this extension if use this link: https://github.com/calliope-edu/pxt-faces

We all like to use Emojis to express what we are feeling.
Let your Calliope mini do the same with the ``||faces:faces||`` extension!

Sometimes a change of expression is only temporary (like a laugh or a wink).
Other times it shows a more permanent change of mood (like a sulk).
Your Calliope mini may want to run some other code while temporarily changing its expression.
All of the blocks let you either wait or return immediately, undoing the temporary change in the background.  

Your Calliope mini will appear much more lifelike if it blinks occasionally. 
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
This block changes just the eyes on your Calliope mini face.

> ``||faces:eyes||`` - chooses from a selection of eyes.

If you repeatedly click on the "+", you can set optional parameters:

> ``||faces:ms||`` - if greater than zero, this says how long (in microsecs) to temporarily 
show the new eyes, before going back to the previous expression.

> ``||faces:wait||`` - (a boolean) if true: wait, else return immediately

## Changing the Mouth
```sig
faces.showMouth(mouth)
```
This block changes just the mouth on your Calliope mini face.

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
NOTE: when selecting eyes, it is **our** left & right, not the Calliope mini !
### ~

## Blinking
```sig
faces.blink(gap: number, vary: number, ms: number)
```
This block lets you control blinking, helping to show mood. A faster blink-rate appears 
more agitated. Longer blinks might indicate boredom or sleepiness. Random changes to the 
gap between blinks makes your Calliope mini much more lifelike. For additional realism, there 
are occasional double or even treble blinks.

> ``||faces:gap||`` - the average time (in millisecs) between blinks (if zero, stop blinking)

> ``||faces:vary||`` - the random variation in spacing of blinks (maximum +/- percentage) 

If you click on the "+", you can set an optional parameter: 

> ``||faces:ms||`` - new length of a blink (in millisecs)


## Examples
Typically, the faces your Calliope mini makes might be in response to various external stimuli, 
such as light, noise, temperature, tilting or shaking;  --or maybe simply getting bored or sleepy!.

### Mood-changes
Here is a very simple example to show some of the ``||faces:faces||`` blocks in use.

```blocks
// example script
faces.showFace(faces.Eyes.Open, faces.Mouth.Grin)
faces.blink(4000, 80, 250)
basic.pause(5000)
// sing wedding march
faces.showMouth(faces.Mouth.Open, 8000, false)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
basic.pause(5000)
// change mood progressively to angry
faces.blink(500, 80, 100)
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat)
basic.pause(2000)
faces.showFace(faces.Eyes.Up, faces.Mouth.Hmmm, 500)
basic.pause(2000)
faces.rollEyes(true)
faces.rollEyes(true)
basic.pause(2000)
faces.showFace(faces.Eyes.Mad, faces.Mouth.Sulk)
basic.pause(2000)
// shout funeral march
faces.showMouth(faces.Mouth.Shout, 4000, false)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
basic.pause(5000)
// recover...
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat)
faces.blink(0)
basic.pause(3000)
// happier now...
faces.showFace(faces.Eyes.Open, faces.Mouth.Ok)
basic.pause(5000)
// finish with a wink
faces.wink(false, 1000)
basic.pause(5000)
```
After showing a happy face for 5 seconds with slow blinking turned on, the mouth is opened 
to sing the Wedding March (closing automatically after 8 seconds).

After a short pause, the mood progressively changes: blinking speeds up, the eyes roll, and an angry face is shown.

Again, the mouth is opened while the Funeral March is shouted-out.

Because the mouth-change was only temporary, after 5 seconds the mouth automatically changes back to sulking.

Then, after a 5-second pause, the mood gradually recovers, blinking is switched off and a happier face returns, 
finally giving us a slow wink.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
> Open this page at [https://calliope-edu.github.io/pxt-faces/](https://calliope-edu.github.io/pxt-faces/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.calliope.cc/](https://makecode.calliope.cc)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/calliope-edu/pxt-faces** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.calliope.cc/](https://makecode.calliope.cc)
* click on **Import** then click on **Import URL**
* paste **https://github.com/calliope-edu/pxt-faces** and click import

#### Metadata (used for search, rendering)

* for PXT/Calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
