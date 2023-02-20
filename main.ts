input.onButtonPressed(Button.A, function () {
    ps_enemigo += 10
})
input.onButtonPressed(Button.B, function () {
	
})
let ps_enemigo = 0
ps_enemigo += 89
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # # . # #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    if (ps_enemigo == 0) {
        ps_enemigo += 89
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                . # # # .
                # # . # #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
