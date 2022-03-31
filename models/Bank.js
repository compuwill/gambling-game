const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Data extends Model {}
// player data records
Bank.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        winnings: {
            type: DataTypes.DECIMAL,
            // placeholder value
            defaultValue: 0,
            allowNull: false
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bank'
    }
);

module.exports = Bank;