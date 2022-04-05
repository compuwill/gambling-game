function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function checkResult(rolls) {
    var rollscopy = rolls.slice(0);
    rollscopy.sort(); //sorts the rolls so its easier to check for a win

    console.log(rollscopy);

    //default the straight to true
    var straight = true;
    var lastNum = rollscopy[0]; //set the last num to the first die

    var consecutiveNums = [];
    var highlight = []; //array of die to highlight
    var currentStreak = 1; //one die is a one die streak

    //starting at the second die
    for (let i = 1; i < rollscopy.length; i++) {
        //currnum
        var currNum = rollscopy[i];


        //if consecutive
        if (currNum != lastNum + 1)
            straight = false;

        //check for streak
        if (currNum == lastNum) {
            currentStreak += 1
        }
        else {
            if (currentStreak >= 3) {
                //we have a streak
                consecutiveNums.push(currentStreak);
                highlight = rolls.reduce((r, n, i) => {
                    n === lastNum && r.push(i);

                    return r;
                }, []);
            }
            currentStreak = 1; //reset to one
        }

        lastNum = currNum;
    }

    if (currentStreak >= 3) {
        //we have an end streak
        consecutiveNums.push(currentStreak);
        highlight = rolls.reduce((r, n, i) => {
            n === currNum && r.push(i);

            return r;
        }, []);
    }


    console.log("highlight:" + highlight);

    console.log(consecutiveNums);
    //order of operations
    if (straight == true)
        return {result:"Straight", highlight: [0,1,2,3,4]};
    if (consecutiveNums.includes(5))
        return {result:"5 of a Kind", highlight: highlight};
    if (consecutiveNums.includes(4))
        return {result:"4 of a Kind", highlight: highlight};
    // if (consecutiveNums.includes(3) && consecutiveNums.includes(2))
    //     return "Full house";
    if (consecutiveNums.includes(3))
        return {result:"3 of a Kind", highlight: highlight};

    // if none of those
    return {result:"Lose", highlight: highlight};

}

module.exports = checkResult;