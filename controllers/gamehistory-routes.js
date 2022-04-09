const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, History } = require('../models');
const withAuth = require('../utils/auth'); 
const { Op } = require("sequelize");

router.get('/', withAuth, (req, res) => {
   History.findAll({
     where: {
      user_id: req.session.user_id     
     },
     attributes: [
       'id',
       'winnings',
       'results',
       'created_at',
       [sequelize.literal('(SELECT COUNT(*) FROM history WHERE results = \'Lose\' and user_id = ' + req.session.user_id + ")"), 'casualty'],
       [sequelize.literal('(SELECT COUNT(*) FROM history WHERE results != \'Lose\' and user_id = ' + req.session.user_id + ")"), 'victory']
     ],
     order: [['winnings', 'DESC']], 
     limit: 10,
     include: [
       {
         model: User,
         attributes: ['id' , 'username']
       }
     ]
   })
     .then(dbHistoryData => {
        const history = dbHistoryData.map(h => h.get({ plain: true }));
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(history);
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        res.render('gamehistory', { history, loggedIn: true });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

module.exports = router;
