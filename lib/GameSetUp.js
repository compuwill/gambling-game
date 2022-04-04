// Start logic game - try to call these static functions in the controler routes 
const DiceGameSetUp = require('./lib/DiceGameSetUp'); 

class GameSetUp
{
   static Greet(){
      return "Hello";
   }

   // static DiceGameSetUp RollDice(DiceGameBoard diceGameBoard, DiceImagePaths diceImagePaths)
   static RollDice(diceGameBoard, diceImagePaths)
   {
      diceGameBoard.DiceGamePieces.DiceFacePositionOne = Math.floor(Math.random() * 7); 
      diceGameBoard.DiceGamePieces.DiceFacePositionTwo = Math.floor(Math.random() * 7);
      diceGameBoard.DiceGamePieces.DiceFacePositionThree = Math.floor(Math.random() * 7);
      diceGameBoard.DiceGamePieces.DiceFacePositionFour = Math.floor(Math.random() * 7);
      diceGameBoard.DiceGamePieces.DiceFacePositionFive = Math.floor(Math.random() * 7);
      diceGameBoard.DiceGamePieces.DiceFacePositionSix = Math.floor(Math.random() * 7);

      // // For quick testing only
      //diceGameBoard.DiceGamePieces.DiceFacePositionOne = 3;
      //diceGameBoard.DiceGamePieces.DiceFacePositionTwo = 3;
      //diceGameBoard.DiceGamePieces.DiceFacePositionThree = 3;
      //diceGameBoard.DiceGamePieces.DiceFacePositionFour = 3;
      //diceGameBoard.DiceGamePieces.DiceFacePositionFive = 3;
      //diceGameBoard.DiceGamePieces.DiceFacePositionSix = 5;

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionOne)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice1ImagePath = Resources.PathToDiceSix;
            break;
      }

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionTwo)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice2ImagePath = Resources.PathToDiceSix;
            break;
      }

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionThree)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice3ImagePath = Resources.PathToDiceSix;
            break;
      }

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionFour)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice4ImagePath = Resources.PathToDiceSix;
            break;
      }

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionFive)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice5ImagePath = Resources.PathToDiceSix;
            break;
      }

      switch (diceGameBoard.DiceGamePieces.DiceFacePositionSix)
      {
         case 1:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceOne;
            break;
         case 2:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceTwo;
            break;
         case 3:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceThree;
            break;
         case 4:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceFour;
            break;
         case 5:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceFive;
            break;
         case 6:
            diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6++;
            diceImagePaths.Dice6ImagePath = Resources.PathToDiceSix;
            break;
      }

      if ((diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1 == 5) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2 == 5) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3 == 5) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4 == 5) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5 == 5) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6 == 5))
      {
         diceGameBoard.DiceGamePrize.IsFiveKind = true;
         diceGameBoard.DiceGamePrize.PrizeWinningPrompt = Resources.FiveKindWinningPrompt;
      }

      if ((diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1 == 4) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2 == 4) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3 == 4) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4 == 4) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5 == 4) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6 == 4))
      {
         diceGameBoard.DiceGamePrize.IsFourKind = true;
         diceGameBoard.DiceGamePrize.PrizeWinningPrompt = Resources.FourKindWinningPrompt;
      }

      if ((diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1 == 1) &&
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2 == 1) &&
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3 == 1) &&
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4 == 1) &&
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5 == 1) &&
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6 == 1))
      {
         diceGameBoard.DiceGamePrize.IsStraight = true;
         diceGameBoard.DiceGamePrize.PrizeWinningPrompt = Resources.StraightWinningPrompt;
      }

      if ((diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace1 == 3) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace2 == 3) ||
         (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace3 == 3) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace4 == 3) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace5 == 3) ||
            (diceGameBoard.DiceFaceOccuranceResults.OccurResultsFace6 == 3))
      {
         diceGameBoard.DiceGamePrize.IsThreeKind = true;
         diceGameBoard.DiceGamePrize.PrizeWinningPrompt = Resources.ThreeKindWinningPrompt;
      }

      var diceGame = new DiceGameSetUp
      (
      diceGameBoard,  // contain result from random function outcomes
         diceImagePaths
      );

       return diceGame; // new diceGame
   }
 
   // static DiceGameSetUp GetResults(DiceGameSetUp diceGame)
   static GetResults(diceGame)
   {
      if (diceGame.DiceGameBoard.DiceGamePrize.IsFiveKind)
      {
         var betAmount = 100 * diceGame.DiceGameBoard.BetAmount;
         diceGame.DiceGameBoard.AccountBalance = betAmount + diceGame.DiceGameBoard.AccountBalance;
      }
      else if (diceGame.DiceGameBoard.DiceGamePrize.IsFourKind)
      {
         var betAmount = 50 * diceGame.DiceGameBoard.BetAmount;
         diceGame.DiceGameBoard.AccountBalance = betAmount + diceGame.DiceGameBoard.AccountBalance;
      }
      else if (diceGame.DiceGameBoard.DiceGamePrize.IsStraight)
      {
         var betAmount = 5 * diceGame.DiceGameBoard.BetAmount;
         diceGame.DiceGameBoard.AccountBalance = betAmount + diceGame.DiceGameBoard.AccountBalance;
      }
      else if (diceGame.DiceGameBoard.DiceGamePrize.IsThreeKind)
      {
         var betAmount = 10 * diceGame.DiceGameBoard.BetAmount;
         diceGame.DiceGameBoard.AccountBalance = betAmount + diceGame.DiceGameBoard.AccountBalance;
      }
      else
      {
         var betAmount = diceGame.DiceGameBoard.BetAmount;
         diceGame.DiceGameBoard.AccountBalance = diceGame.DiceGameBoard.AccountBalance - betAmount;
      }
      return diceGame;
   }

   // DiceGameSetUp currentDiceGame
   static LoadGame(currentDiceGame)
   {
      var diceImagePaths = new DiceImagePaths
      (
         Dice1ImagePath = 'images/DiceSix.png',
         Dice2ImagePath =  'images/DiceFive.png',
         Dice3ImagePath =  'images/DiceFour.png',
         Dice4ImagePath = 'images/DiceThree.png',
         Dice5ImagePath =  'images/DiceTwo.png',
         Dice6ImagePath =   'images/DiceOne.png',
         DiceBlankImagePath =  'images/Blank.png'
      );

      var diceGamePieces = new DiceGamePieces
      (
         DiceFacePositionOne = 0,
         DiceFacePositionTwo = 0,
         DiceFacePositionThree = 0,
         DiceFacePositionFour = 0,
         DiceFacePositionFive = 0,
         DiceFacePositionSix = 0
      );

      var diceFaceOccurResults = new DiceFaceOccurenceResults
      (
         OccurResultsFace1 = 0,
         OccurResultsFace2 = 0,
         OccurResultsFace3 = 0,
         OccurResultsFace4 = 0,
         OccurResultsFace5 = 0,
         OccurResultsFace6 = 0
      );

      var diceGamePrize = new DiceGamePrize(false, false, false, false, false , '' );
      var diceGameBoard = new DiceGameBoard
      (
         DiceGamePrize = diceGamePrize,
         DiceFaceOccuranceResults = diceFaceOccurResults,
         DiceGamePiecesEntity = diceGamePieces,
         GameMessage = String.Empty,
         AccountBalance = currentDiceGame.DiceGameBoard.AccountBalance, //Handling Account Balance
         BetAmount = currentDiceGame.DiceGameBoard.BetAmount //Handling UI Bet Amount input
         // AccountBalance = currentDiceGame.DiceGameBoardEntity.AccountBalance, //Handling Account Balance
         // BetAmount = currentDiceGame.DiceGameBoardEntity.BetAmount //Handling UI Bet Amount input
      );

      var diceGame = new DiceGameSetUp
      (
         diceGameBoard,
         diceImagePaths
      );

      return diceGame;
   }

   static LoadGameInitial()
   {
      var diceGameSetUp = new DiceGameSetUp(); // count on the constructor
      return diceGameSetUp;
   }
}

module.exports = GameSetUp;