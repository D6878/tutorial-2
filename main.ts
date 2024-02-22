function soft_left () {
	
}
function Obstacle_detected () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function sogt__right () {
	
}
function all_ahead () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
}
let set_left_turn_to = 0
let set_IRL = 0
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    let ILR = 0
    set_IRL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    set_IRL = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (ILR == 0 && ILR == 0) {
        all_ahead()
    } else if (ILR == 0) {
    	
    } else if (ILR == 0) {
        let left_turn = 0
        if (left_turn) {
            sogt__right()
            set_left_turn_to = 0
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        } else {
            soft_left()
            set_left_turn_to = 10
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
        }
    }
})
