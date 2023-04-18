input.onButtonPressed(Button.AB, function () {
    music.playMelody("G B A G C5 B A B ", 11)
})
let strip = "me" + "and folow me" + "please!"
pins.digitalReadPin(DigitalPin.P0)
serial.writeString("I'm the best microbit I know")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        # . . . #
        `)
    game.pause()
    game.resume()
})
control.inBackground(function () {
	
})
