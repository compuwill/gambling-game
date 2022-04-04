const User = require('./User');
// const GameboardState = require("./GameboardState");
const DiceGameSetUp = require("./DiceGameSetUp");
const DiceImagePaths = require("./DiceImagePaths");
const DiceGameBoard = require("./DiceGameBoard");
const DiceGamePrize = require("./DiceGamePrize");

// // --create associations
// User.hasMany(GameboardState, {
//    foreignKey: 'user_id'  
//  })
// 
//  // --assert the reverse association 
// GameboardState.belongsTo(User, {
// foreignKey: 'user_id',
// }); 

//-------------------------------------------
// --create associations
User.hasMany(DiceGameSetUp, {
  foreignKey: 'user_id' //user_id in the User model, where user_id is thus a foreigh key
})

// --assert the reverse association 
DiceGameSetUp.belongsTo(User, {
foreignKey: 'user_id',
}); 

//-------------------------------------------
DiceGameSetUp.hasOne(DiceImagePaths, {
  foreignKey: 'user_id',
  }); 
 
DiceGameSetUp.hasOne(DiceGameBoard, {
  foreignKey: 'user_id',
  });  
  
//-------------------------------------------
DiceGameBoard.hasOne(DiceGamePrize, {
  foreignKey: 'user_id',
  });  

// module.exports = { GameboardState };
module.exports = { User, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize };

