const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}
// player data records
History.init(
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
            type: DataTypes.DECIMAL(10,2),
            // placeholder value
            defaultValue: 0,
            allowNull: false
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'history'
    }
);

module.exports = History;