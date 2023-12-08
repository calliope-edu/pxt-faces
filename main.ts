/**
 * an extension for making faces...
 */
//% color=#c097c2 weight=100 icon="\uf118" block="Faces"
namespace faces {
    // CONSTANTS & ENUMS...

    /* eyes use these pixel-map contributions
        ( 1   2)   4  ( 8  16 )
        (32  64) 128  (256 512) 
    
    The value of each Eye Enum is a two-row bitmap for just the 
    left eye pattern. The right eye will need {map} << 3
    We use bothEyes({left},{right}) to get the complete bitmap
    */
    enum Eye {
        Up = (1 + 2),
        Down = (32 + 64),
        Left = (1 + 32),
        Right = (2 + 64),
        All = (1 + 2 + 32 + 64)
    }

    // USER INTERFACE DROP-Down ENUMS

    // EYES: (the value of each Enum is a two-row bitmap)
    export enum Eyes {
        //% block="open"
        Open = 891,
        //% block="sad"
        Sad = 874,
        //% block="shut"
        Shut = 864,
        //% block="mad"
        Mad = 347,
        //% block="up"
        Up = 27,
        //% block="pop"
        Pop = 561,
        //% block="left"
        Left = 297,
        //% block="right"
        Right = 594,
        //% block="wink"
        Wink = 867
    };

    //MOUTHS: use these pixel-map contributions
    //       1    2    4   8   16  
    //      32   64  128  256  512 
    //      1K   2K   4K   8K  16K  
    export enum Mouth {
        //% block="flat"
        Flat = 448,
        //% block="ok"
        Ok = 4416,
        //% block="grin"
        Grin = 14880,
        //% block="sulk"
        Sulk = 17856,
        //% block="Hmmm"
        Hmmm = 14464,
        //% block="open"
        Open = 4420,
        //% block="left"
        Left = 6240,
        //% block="right"
        Right = 13056,
        //% block="shout"
        Shout = 14660,
        //% block="laugh"
        Laugh = 15204,
        //% block="smirk"
        Smirk = 6944,
        //% block="kiss"
        Kiss = 128
    };


    export enum EyesV {
        //% block="up"
        Up,
        //% block="level"
        Level,
        //% block="down"
        Down
    };

    export enum EyesH {
        //% block="left"
        Left,
        //% block="ahead"
        Ahead,
        //% block="right"
        Right,
        //% block="inwards"
        Inwards,
        //% block="outwards"
        Outwards
    };

    export enum Spin {
        //% block="clockwise"
        Clockwise,
        //% block="anti-clockwise"
        Anticlockwise
    };

    // LOW_LEVEL TOOLS
    function bothEyes(left: Eye, right: Eye): number {
        return (left + (right << 3))
    }

    /* Use a bitmap to plot LEDs on/off in a subset of display-rows 
    (the top two for eyes; the bottom three for mouths).
    To optimise performance, bits are mapped low-endian and row-wise in
    groups of 5, (top-left pixel as the LSB; bottom-Right pixels as the MSB). 
    So for a 2-row pair of eyes, the pixel contributions are:
            1   2   4   8  16
            32  64 128 256 512
    */
    function showBitmap(bitmap: number, rows: number, start: number) {
        for (let y = start; y < (start + rows); y++) {
            for (let x = 0; x < 5; x++) {
                if (bitmap & 1) {
                    led.plot(x, y);
                } else {
                    led.unplot(x, y);
                }
                bitmap >>= 1;
            }
        }
    }

    // pause for ms +/- vary%
    function delay(ms: number, vary: number) {
        let time = ms * (100 + (randint(0, 2 * vary) - vary)) / 100;
        pause(time);
    }

    // EXPORTED USER INTERFACES  

    /**
     * Show the selected face on the LED display.
     * @param eyes choice of eyes
     * @param mouth choice of mouth
     */
    //% block="show face with eyes= $eyes, mouth= $mouth|| for $ms ms"
    //% expandableArgumentMode="enabled"
    //% weight=90
    export function showFace(eyes: Eyes, mouth: Mouth, ms = 0) {

        showBitmap(eyes, 2, 0);
        showBitmap(mouth, 3, 2);
        if (ms == 0) {
            myEyes = eyes;
            myMouth = mouth;
        } else {
            pause(ms);
            showBitmap(myEyes, 2, 0);
            showBitmap(myMouth, 3, 2);
        }
    }

    /**
     * Show the selected eyes on the LED display.
     * @param eyes choice of eyes
     */
    //% block="show eyes as $eyes"
    //% weight=80
    export function showEyes(eyes: Eyes) {
        myEyes = eyes;
        showBitmap(eyes, 2, 0);
    }

    /**
     * Show the selected mouth on the LED display.
     * @param mouth choice of mouth
     */
    //% block="show mouth as $mouth|| for $ms ms"
    //% expandableArgumentMode="enabled"
    //% weight=70
    export function showMouth(mouth: Mouth, ms = 0) {
        showBitmap(mouth, 3, 2);
        if (ms == 0) {
            myMouth = mouth;
        } else {
            pause(ms);
            showBitmap(myMouth, 3, 2);
        }
    }

    /**
        * Show the selected mouth on the LED display.
        * @param leftEye if true, wink the left eye, else the right one
        */
    //% block="wink: left Eye? $isLeft for $ms ms"
    //% expandableArgumentMode="enabled"
    //% weight=60
    export function wink(isLeft: boolean, ms = 0) {
        let leftEye = myEyes & Eye.All;
        let rightEye = myEyes >> 3;
        let winking = bothEyes(leftEye, Eye.Down);
        if (isLeft) {
            winking = bothEyes(Eye.Down, rightEye);
        } 
        showBitmap(winking, 2, 0);
        pause(ms);
        showBitmap(myEyes, 2, 0);
        
    }

    /**
     * Look in the chosen direction.
     * @param upDown vertical eye-position
     * @param leftRight horizontal eye-position
     */
    //% block="look $upDown $leftRight|| for $ms ms"
    //% expandableArgumentMode="enabled"
    //% weight=60
    export function look(upDown: EyesV, leftRight: EyesH, ms = 0) {
        let eyeMap = 0;
        if ((upDown == EyesV.Level) && (leftRight == EyesH.Ahead)) {
            eyeMap = Eye.All + (Eye.All << 3);
        } else {
            switch (upDown) {
                case EyesV.Up: eyeMap = Eye.Up + (Eye.Up << 3);
                    break;
                case EyesV.Level:
                    break;
                case EyesV.Down: eyeMap = Eye.Down + (Eye.Down << 3);
                    break;
            }
            switch (leftRight) {
                case EyesH.Left:
                    eyeMap |= Eye.Left + (Eye.Left << 3);
                    break;
                case EyesH.Ahead:
                    break;
                case EyesH.Right:
                    eyeMap |= Eye.Right + (Eye.Right << 3);
                    break;
                case EyesH.Inwards:
                    eyeMap |= Eye.Right + (Eye.Left << 3);
                    break;
                case EyesH.Outwards:
                    eyeMap |= Eye.Left + (Eye.Right << 3);
                    break;
            }
        }
        showBitmap(eyeMap, 2, 0);
        if (ms == 0) {
            myEyes = eyeMap;
        } else {
            pause(ms);
            showBitmap(myEyes, 2, 0);
        }
    }


    /**
     * Roll the eyes in either direction.
     */
    //% block="roll eyes %dir"
    //% weight=50
    export function rollEyes(spin: Spin) {
        if (spin == Spin.Clockwise) {
            look(EyesV.Up, EyesH.Left, 125);
            look(EyesV.Up, EyesH.Ahead, 125);
            look(EyesV.Up, EyesH.Right, 125);
            look(EyesV.Level, EyesH.Right, 125);
            look(EyesV.Down, EyesH.Right, 125);
            look(EyesV.Down, EyesH.Ahead, 125);
            look(EyesV.Down, EyesH.Left, 125);
            look(EyesV.Level, EyesH.Left, 125);
        } else {
            look(EyesV.Level, EyesH.Left, 125);
            look(EyesV.Down, EyesH.Left, 125);
            look(EyesV.Down, EyesH.Ahead, 125);
            look(EyesV.Down, EyesH.Right, 125);
            look(EyesV.Level, EyesH.Right, 125);
            look(EyesV.Up, EyesH.Right, 125);
            look(EyesV.Up, EyesH.Ahead, 125);
            look(EyesV.Up, EyesH.Left, 125);
        }
        showBitmap(myEyes, 2, 0);
    }

    let myMouth = Mouth.Flat;
    let myEyes = Eyes.Open;
    showFace(myEyes, myMouth);
    pause(2000);
    wink(true, 2000);
    pause(2000);
    wink(false, 2000);
}