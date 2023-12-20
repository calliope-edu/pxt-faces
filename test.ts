
faces.showFace(faces.Eyes.Open, faces.Mouth.Ok, 0, true);
/*
faces.showEyes(faces.Eyes.Sad, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Shut, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Mad, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Up, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Pop, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Left, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Right, 0, true);
basic.pause(500);
faces.showEyes(faces.Eyes.Open, 0, true);
basic.pause(500);
basic.clearScreen();

faces.showMouth(faces.Mouth.Ok, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Grin, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Sulk, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Hmmm, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Open, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Left, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Right, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Shout, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Laugh, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Smirk, 0, true);
basic.pause(500);
faces.showMouth(faces.Mouth.Flat, 0, true);
basic.pause(500);

faces.showFace(faces.Eyes.Sad, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Shut, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Mad, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Up, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Pop, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Left, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Right, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat, 0, true);
basic.pause(500);

faces.showFace(faces.Eyes.Open, faces.Mouth.Ok, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Sulk, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Hmmm, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Open, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Left, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Right, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Shout, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Laugh, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Smirk, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Flat, 0, true);
basic.pause(500);
faces.showFace(faces.Eyes.Open, faces.Mouth.Grin, 0, true);
basic.pause(2500);
for (let v=0; v < 3; v++) {
    for (let h = 0; h < 5; h++) {
        faces.look(v, h, 0, true);
        basic.pause(1000);
    }
    basic.pause(1000);
}
basic.pause(2000);
faces.showEyes(faces.Eyes.Open);

*/
faces.wink(true);
basic.pause(500);
faces.wink(false);
basic.pause(500);

faces.wink(true,2000);
basic.pause(500);
faces.wink(false,2000);
basic.pause(1500);

faces.rollEyes(true);
faces.rollEyes(true);
faces.rollEyes(true);
basic.pause(1000);
faces.rollEyes(false);
faces.rollEyes(false);
faces.rollEyes(false);
basic.pause(3000);

faces.showFace(faces.Eyes.Open, faces.Mouth.Ok, 0, true);
faces.blink(2000, 0, 300);
basic.pause(5000);

faces.blink(2000,80,250)
let myMouth = faces.Mouth.Grin;
let myEyes = faces.Eyes.Up;
faces.showFace(myEyes, myMouth, 3000, false);
pause(3000);
//sing 16 notes then close mouth again
faces.showMouth(faces.Mouth.Open,16000,false);
music.stringPlayable("C D E F G G E E F F D D C C C C", 60);
pause(3000);
//shout angrily
faces.blink(500, 80, 100);
faces.showFace(faces.Eyes.Mad, faces.Mouth.Sulk, 16000, false);
music.stringPlayable("C D E F G G E E F F D D C C C C", 60);
pause(5000);

faces.blink(0);
faces.showFace(faces.Eyes.Open, faces.Mouth.Ok);
faces.wink(false,1000);