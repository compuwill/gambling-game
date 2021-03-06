const router = require("express").Router();
const { User, History } = require("../../models");
const withAuth = require('../../utils/auth');

const checkResult = require("../../utils/game-logic");

//test
//checkResult([2,2,2,5,5])

// Roll the Dice!
router.post("/dice", withAuth, (req, res) => {
  console.log("someone's playing dice!");
  // expects {user_id: 1, bet_amount: 5}
  //get the user
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.session.user_id,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      //check if we have a user
      console.log('No user found with this id');
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    //once we find the user data make sure the user has enough money!
    console.log(dbUserData);
    if (Math.round(dbUserData.cash * 100) < Math.round(req.body.bet_amount * 100)) {
      console.log('User does not have enough money!' + dbUserData.cash + " " + req.body.bet_amount);
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
      var multiplier = "";
      if (result.result === "Straight") { winnings = req.body.bet_amount * 100; multiplier = "100x"; }
      if (result.result === "5 of a Kind") { winnings = req.body.bet_amount * 50;  multiplier = "50x"; }
      if (result.result === "4 of a Kind") { winnings = req.body.bet_amount * 25;  multiplier = "25x"; }
      if (result.result === "3 of a Kind") { winnings = req.body.bet_amount * 5;  multiplier = "5x"; }

      //subtract or add the money
      User.update(
        {
          cash: dbUserData.cash - req.body.bet_amount + winnings,
        },
        {
          where: {
            id: req.session.user_id,
          },
        }
      );

      try {
        History.create({
          user_id: req.session.user_id,
          winnings: winnings,
          results: result.result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

      //update the session user's cash
      req.session.user = { username: req.session.user.username, email: req.session.user.email, cash: dbUserData.cash - req.body.bet_amount + winnings };

      res.json({
        rolls: rolls,
        highlight: result.highlight,
        winnings: winnings,
        multiplier: multiplier,
        newCash: dbUserData.cash - req.body.bet_amount + winnings,
        result: result.result,
      });
    }
  });
});

//helper function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = router;
