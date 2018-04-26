/**
 * Created by Ryan on 05/03/2018.
 */
var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

//Prints dice roll to the page
function printNumber() {
    return dice.roll();
}


