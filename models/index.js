const User = require('./User');
const History = require('./History');
const Rating = require("./Rating");

User.hasMany(Rating, {
  foreignKey: 'user_id'  
})

Rating.belongsTo(User, {
  foreignKey: 'user_id',
}); 

History.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, History, Rating };