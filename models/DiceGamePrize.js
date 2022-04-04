const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiceGamePrize extends Model {}

DiceGamePrize.init(
   {
      id: {
         type: DataTypes.INTEGER, 
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      is_five_kind: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }, 
      is_four_kind:{
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      is_three_kind: {
         type: DataTypes.BOOLEAN,
         allowNull: false
      },
      is_straight: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },     
      // -- defined as the foreign key
      dice_game_board_id:{ 
         type: DataTypes.INTEGER,
         references:{
            model: 'dicegameboard',
            key: 'id'
         }
      } // last entity
   }, // end of 1st object      
   {
      sequelize, // pass in our imported sequelize connection (the direct connection to our database)
      timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
      freezeTableName: true,  // don't pluralize name of database table
      underscored: true,  // use underscores instead of camel-casing  
      modelName: 'dicegameprize', // make it so our model name stays lowercase in the database
   }
);

module.exports = DiceGamePrize;
