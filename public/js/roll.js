//Preload Audio
var audShake = new Audio('./audio/dice_shake.mp3')
audShake.volume = 0.2
var audSmallWin = new Audio('./audio/small_win.mp3')
audSmallWin.volume = 0.2
var audMedWin = new Audio('./audio/med_win.mp3')
audMedWin.volume = 0.2
var audBigWin = new Audio('./audio/big_win.mp3')
audBigWin.volume = 0.2

//initial dice set
rollDice([4, 2, 3, 4, 5])


//ROLL DICE
function rollDice(rolls) {
  const dice = [...document.querySelectorAll(".die-list")];
  var counter = 0;
  dice.forEach((die) => {
    toggleClasses(die);
    die.dataset.roll = rolls[counter]; //getRandomNumber(1, 6);
    counter++;
  });
}

//HIGHLIGHT DICE FUNCTION
function highlightDice(highlight) {
  //play different sound effects depending on how many highlighted die
  if (highlight.length == 5) {
    audBigWin.currentTime = 0;
    audBigWin.play()
  }
  if (highlight.length >= 4) {
    audMedWin.currentTime = 0;
    audMedWin.play()
  }
  else if (highlight.length == 3) {
    audSmallWin.currentTime = 0;
    audSmallWin.play()
  }

  const dice = [...document.querySelectorAll(".die-list")];
  var counter = 0;
  dice.forEach((die) => {
    if (highlight.includes(counter))
      die.classList.add("highlight");
    else
      die.classList.remove("highlight");
    counter++;
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollBtn = document.getElementById("roll-btn");
const rollResult = document.getElementById("result");
const rollMultiplier = document.getElementById("multiplier");
const rollWinnings = document.getElementById("winnings");
const cashP = document.getElementById("user-cash");
const bigbets = document.getElementById("bigbets");

const handleRoll = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/game/dice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bet_amount: bigbets.value }),
  });

  if (response.ok) {
    //document.location.replace('/');
    response.json().then((data) => {
      //reset the dice color
      highlightDice([]);

      //play shake audio
      audShake.currentTime = 0;
      audShake.play()

      //reset the multiplier
      rollMultiplier.innerText = "";
      rollWinnings.innerText = "";

      rollResult.innerText = "Rolling...";
      rollDice(data.rolls);
      console.log(data.rolls);
      console.log(data.result);
      setTimeout(function () {
        //stop the shake audio
        audShake.pause();

        rollResult.innerText = data.result;
        cashP.innerText = `You have $${data.newCash}!`
        //highlight the winning dice
        highlightDice(data.highlight);

        //show the multiplier
        rollMultiplier.innerText = data.multiplier;
        if (data.winnings > 0)
        rollWinnings.innerText = "+$"+data.winnings;


      }, 1850);
      //alert(data.result);
    });
  } else {
    console.log(response);
    response.json().then((data) => {
      alert(data.message);
    });

  }
};

rollBtn.addEventListener("click", handleRoll);
