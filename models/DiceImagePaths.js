const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiceImagePaths extends Model {}

DiceImagePaths.init(
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
      timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
      freezeTableName: true,  // don't pluralize name of database table
      underscored: true,  // use underscores instead of camel-casing  
      modelName: 'diceimagepaths', // make it so our model name stays lowercase in the database
   }
);

module.exports = DiceImagePaths;
