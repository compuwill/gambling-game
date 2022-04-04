const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiceGameSetUp extends Model {}

DiceGameSetUp.init(
   {
      id: {
         type: DataTypes.INTEGER, 
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
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
      sequelize, // pass in our imported sequelize connection (the direct connection to our database)
      timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
      freezeTableName: true,  // don't pluralize name of database table
      underscored: true,  // use underscores instead of camel-casing  
      modelName: 'dicegamesetup', // make it so our model name stays lowercase in the database
   }
);

module.exports = DiceGameSetUp;