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
const cashP = document.getElementById("user-cash");

const handleRoll = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/game/dice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: 1, bet_amount: 5 }),
  });

  if (response.ok) {
    //document.location.replace('/');
    response.json().then((data) => {
      rollResult.innerText = "Rolling...";
      rollDice(data.rolls);
      console.log(data.rolls);
      console.log(data.result);
      setTimeout(function () {
        rollResult.innerText = data.result;
        cashP.innerText = `You have $${data.newCash}!`
      }, 2000);
      //alert(data.result);
    });
  } else {
    alert("Oops! There was an issue rolling the dice!");
    console.log(response);
  }
};

rollBtn.addEventListener("click", handleRoll);
