const User = require('./User');
const Bank = require('./Bank');

Bank.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User };