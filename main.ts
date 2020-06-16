function UserChooses () {
    if (input.buttonIsPressed(Button.A)) {
        if (Target == 0) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            control.reset()
        } else {
            music.playTone(139, music.beat(BeatFraction.Double))
            music.playTone(277, music.beat(BeatFraction.Eighth))
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            control.reset()
        }
    } else {
        if (input.buttonIsPressed(Button.B)) {
            if (Target == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                control.reset()
            } else {
                music.playTone(139, music.beat(BeatFraction.Double))
                music.playTone(277, music.beat(BeatFraction.Eighth))
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                control.reset()
            }
        }
    }
}
function PickRandomNumber () {
    if (Math.randomBoolean()) {
        Target = 0
    } else {
        Target = 1
    }
}
let Target = 0
PickRandomNumber()
basic.showString("?")
basic.forever(function () {
    UserChooses()
})
