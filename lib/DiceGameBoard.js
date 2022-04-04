const DiceFaceOccurenceResults = require('./DiceFaceOccurenceResults');
const DiceGamePieces = require('./DiceGamePieces');
const DiceGamePrize = require('./DiceGamePrize');

class DiceGameBoard{
  constructor(){
    this.DiceGamePieces = new DiceGamePieces(0,0,0,0,0,0);
    this.DiceGamePrize = new DiceGamePrize(false, false, false, false, 'No Prizes Yet');
    this.DiceFaceOccurenceResults = new DiceFaceOccurenceResults(0,0,0,0,0,0);
    this.BetAmount = 0;
    this.AccountBalance = 0;
    this.GameMessage = '';
  }
}

module.exports = DiceGameBoard;
