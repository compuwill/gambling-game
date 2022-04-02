const User = require('./User');
const History = require('./History');

History.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, History };