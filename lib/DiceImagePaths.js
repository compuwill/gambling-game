class DiceImagePath
{
   constructor(dice1ImagePath, dice2ImagePath, dice3ImagePath, dice4ImagePath, dice5ImagePath, dice6ImagePath){
      this.Dice1ImagePath = dice1ImagePath;
      this.Dice2ImagePath = dice2ImagePath;
      this.Dice3ImagePath = dice3ImagePath;
      this.Dice4ImagePath = dice4ImagePath;
      this.Dice5ImagePath = dice5ImagePath;
      this.Dice6ImagePath = dice6ImagePath;
   }

   Dice1ImagePath(){
      return this.Dice1ImagePath;
   }

   Dice2ImagePath(){
      return this.Dice2ImagePath;
   }

   Dice3ImagePath(){
      return this.Dice3ImagePath;
   }

   Dice4ImagePath(){
      return this.Dice4ImagePath;
   }

   Dice5ImagePath(){
      return this.Dice5ImagePath;
   }

   Dice6ImagePath(){
      return this.Dice6ImagePath;
   }

}

module.exports = DiceImagePath;
