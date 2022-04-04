const DiceGameBoard = require('./DiceGameBoard');
const DiceImagePaths = require('./DiceImagePaths');

class DiceGameSetUp {
   constructor(){
      this.DiceGameBoard = new DiceGameBoard();
      this.DiceImagePaths = new DiceImagePaths(
         'images/DiceSix.png',
         'images/DiceFive.png',
         'images/DiceFour.png',
         'images/DiceThree.png',
         'images/DiceTwo.png',
         'images/DiceOne.png'
      )
   }
}

module.exports = DiceGameSetUp;
