function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function checkResult(rolls) {
    rolls.sort(); //sorts the rolls so its easier to check for a win

    console.log(rolls);

    //default the straight to true
    var straight = true;
    var lastNum = rolls[0]; //set the last num to the first die

    var consecutiveNums = [];
    var currentStreak = 1; //one die is a one die streak

    //starting at the second die
    for (let i = 1; i < rolls.length; i++) {
        //currnum
        var currNum = rolls[i];


        //if consecutive
        if (currNum != lastNum + 1)
            straight = false;

        //check for streak
        if (currNum == lastNum) {
            currentStreak += 1
        }
        else {
            if (currentStreak >= 2) {
                //we have a streak
                consecutiveNums.push(currentStreak);
            }
            currentStreak = 1; //reset to one
        }

        lastNum = currNum;
    }

    //order of operations
    if (straight == true)
        return "Straight";
    if (consecutiveNums.includes(5))
        return "5 of a Kind";
    if (consecutiveNums.includes(4))
        return "4 of a Kind";
    if (consecutiveNums.includes(3) && consecutiveNums.includes(2))
        return "Full house";
    if (consecutiveNums.includes(3))
        return "3 of a Kind";
    
    // if none of those
    return "Lose";

}

module.exports = checkResult;