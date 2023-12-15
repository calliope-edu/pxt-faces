// 
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat, 0, true)

faces.showEyes(faces.Eyes.Open, 0, true)

faces.showMouth(faces.Mouth.Flat, 0, true)

faces.look(faces.EyesV.Up, faces.EyesH.Left, 0, true)

faces.wink(false, 750, true)

faces.rollEyes(true)

faces.blink(2000, 50, 125)





let myMouth = faces.Mouth.Grin;
let myEyes = faces.Eyes.Pop;
music.stringPlayable("C D E F G G E E F F D D C C C C", 60);
faces.showFace(myEyes, myMouth);
faces.wink(true);
pause(1000);
faces.wink(false);
pause(3000);
faces.showFace(faces.Eyes.Mad, faces.Mouth.Sulk, 7000, false);
music.stringPlayable("C D E F G G E E F F D D C C C C", 60);
pause(5000);