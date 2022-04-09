const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// -- Create our User model
class Rating extends Model {}

Rating.init(
   {
      id: {
         type: DataTypes.INTEGER, 
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }, 
      user_id:{ 
         type: DataTypes.INTEGER,
         references:{
            model: 'user',
            key: 'id'
         }
      } // last entity
   }, // end of 1st object      
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'rating'
   }
);

module.exports = Rating;