class DiceGamePieces{
   constructor(diceFacePositionOne, diceFacePositionTwo, diceFacePositionThree, 
               diceFacePositionFour, siceFacePositionFive, siceFacePositionSix){
      this.DiceFacePositionOne = diceFacePositionOne; // set
      this.DiceFacePositionTwo = diceFacePositionTwo;
      this.DiceFacePositionThree = diceFacePositionThree;
      this.DiceFacePositionFour = diceFacePositionFour;
      this.DiceFacePositionFive = siceFacePositionFive;
      this.DiceFacePositionSix = siceFacePositionSix;
   }
   // get
   DiceFacePositionOne(){
      return this.DiceFacePositionOne;
   }

   DiceFacePositionTwo(){
      return this.DiceFacePositionTwo;
   }

   DiceFacePositionThree(){
      return this.DiceFacePositionThree;
   }

   DiceFacePositionFour(){
      return this.DiceFacePositionFour;
   }

   DiceFacePositionFive(){
      return this.DiceFacePositionFive;
   }

   DiceFacePositionSix(){
      return this.DiceFacePositionSix;
   }
}


module.exports = DiceGamePieces;
