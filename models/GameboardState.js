// Active Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameboardState extends Model {}

GameboardState.init(
   {
      id: {
         type: DataTypes.INTEGER, 
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      dice_1_image_path: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      dice_2_image_path:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      dice_3_image_path: {
         type: DataTypes.STRING,
         allowNull: false
      },
      dice_4_image_path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dice_5_image_path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dice_6_image_path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bet_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      account_balance: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      prize_winning_prompt: {
         type: DataTypes.STRING,
         allowNull: false
       },
      // -- defined as the foreign key
      user_id:{ 
         type: DataTypes.INTEGER,
         references:{
            model: 'user',
            key: 'id'
         }
      } // last entity
   }, // end of 1st object      
   {
      // pass in our imported sequelize connection (the direct connection to our database)
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'gameboardstate',
   }
);

module.exports = GameboardState;