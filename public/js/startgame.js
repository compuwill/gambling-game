const GameSetUp = require('../../lib/GameSetUp');

// Version  async/[response]-await
async function startgameFormHandler(event) {
  event.preventDefault();
  
  const cash = document.querySelector('#cash').value.trim();
  alert("Start Game Button was clicked!")
  
  // Execute Game Logic
  var saywhat = GameSetUp.Greet();
  alert(saywhat);
  // When data that resulted from game logic are ready, do a fetch
  if (cash) {
      const response = await fetch('/api/gameboardstate/startgame', {
        method: 'post',
        body: JSON.stringify({
          dice_1_image_path,
          dice_2_image_path,
          dice_3_image_path,
          dice_4_image_path,
          dice_5_image_path,
          dice_6_image_path,
          bet_amount,
          account_balance,
          prize_winning_prompt // user ID can be obtained from the session
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
  }

}
document.getElementById('start_game_form').addEventListener('submit', startgameFormHandler);
 
