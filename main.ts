let x = 0
let y = -1
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 3; index++) {
            y += 1
            for (let index = 0; index < 7; index++) {
                led.plot(x, y)
                x += 1
                basic.pause(200)
                basic.clearScreen()
            }
            y += 1
            for (let index = 0; index < 8; index++) {
                led.plot(x, y)
                x += -1
                basic.pause(200)
                basic.clearScreen()
            }
        }
        y = -1
        x = 0
    }
})
