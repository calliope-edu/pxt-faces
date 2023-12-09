
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