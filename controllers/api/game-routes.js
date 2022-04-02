const router = require("express").Router();
const { User } = require("../../models");

const checkResult = require("../../utils/game-logic");

// Roll the Dice!
router.post("/dice", (req, res) => {
  console.log("someone's playing dice!");
  // expects {user_id: 1, bet_amount: 5}
  if (req.session.loggedIn || true == true) {
    //make sure the user is logged in before rolling
    //get the user
    User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.body.user_id,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        //check if we have a user
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      //once we find the user data make sure the user has enough money!
      console.log(dbUserData);
      if (dbUserData.cash < req.body.bet_amount) {
        res.status(404).json({ message: "User does not have enough money!" });
        return;
      } else {
        var rolls = [
          getRandomInt(6) + 1,
          getRandomInt(6) + 1,
          getRandomInt(6) + 1,
          getRandomInt(6) + 1,
          getRandomInt(6) + 1,
        ];
        var result = checkResult(rolls);
        var winnings = 0;
        if (result === "5 of a Kind") winnings = req.body.bet_amount * 100;
        if (result === "4 of a Kind") winnings = req.body.bet_amount * 50;
        if (result === "3 of a Kind") winnings = req.body.bet_amount * 10;
        if (result === "Straight") winnings = req.body.bet_amount * 5;

        //subtract or add the money
        User.update(
          {
            cash: dbUserData.cash - req.body.bet_amount + winnings,
          },
          {
            where: {
              id: req.body.user_id,
            },
          }
        );

        //update the session user's cash
        req.session.user = { username: req.session.user.username, email: req.session.user.email, cash: dbUserData.cash - req.body.bet_amount + winnings };


        res.json({
          rolls: rolls,
          dice1: rolls[0],
          dice2: rolls[1],
          dice3: rolls[2],
          dice4: rolls[3],
          dice5: rolls[4],
          winnings: winnings,
          newCash: dbUserData.cash - req.body.bet_amount + winnings,
          result: result,
        });
      }
    });
  } else {
    res.status(404).end();
  }
});

//helper function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = router;
