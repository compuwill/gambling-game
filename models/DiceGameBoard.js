// NOTE: Ignore this model for now ( 4 of 4 )

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiceGameBoard extends Model {}

DiceGameBoard.init(
   {
      id: {
         type: DataTypes.INTEGER, 
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      bet_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      account_balance: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      game_message: {
         type: DataTypes.STRING,
         allowNull: true
       },
      // -- defined as the foreign key
      dice_game_setup_id:{ 
         type: DataTypes.INTEGER,
         references:{
            model: 'dicegamesetup',
            key: 'id'
         }
      } // last entity
   }, // end of 1st object      
   {
      sequelize, // pass in our imported sequelize connection (the direct connection to our database)
      timestamps: true, // don't automatically create createdAt/updatedAt timestamp fields
      freezeTableName: true,  // don't pluralize name of database table
      underscored: true,  // use underscores instead of camel-casing  
      modelName: 'dicegameboard', // make it so our model name stays lowercase in the database
   }
);

module.exports = DiceGameBoard;