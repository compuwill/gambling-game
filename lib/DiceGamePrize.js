class DiceGamePrize{
   constructor(isFiveKind, isFourKind, isThreeKind, isStraight, prizeWinningPrompt){
      this.IsFiveKind = isFiveKind;
      this.IsFourKind = isFourKind;
      this.IsThreeKind = isThreeKind;
      this.IsStraight = isStraight;
      this.PrizeWinningPrompt = prizeWinningPrompt;
   }

   IsFiveKind(){
      return this.IsFiveKind;
   }

   IsFourKind(){
      return this.IsFourKind;
   }

   IsThreeKind(){
      return this.IsThreeKind;
   }

   IsStraight(){
      return this.IsStraight;
   }

   PrizeWinningPrompt(){
      return this.PrizeWinningPrompt;
   }


}
 

module.exports = DiceGamePrize;
