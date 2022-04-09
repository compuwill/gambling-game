const router = require('express').Router();
const { User, Rating } = require('../models');
const withAuth = require('../utils/auth'); 

router.get('/', withAuth, (req, res) => {
   Rating.findAll({
     where: {
       // use the ID from the session
       user_id: req.session.user_id
     },
     attributes: [
       'id',
       'score',       
       'created_at'
     ],
     order: [['created_at', 'DESC']], 
     limit: 1,
     include: [
       {
         model: User,
         attributes: ['id' , 'username']
       }
     ]
   })
     .then(dbRatingData => {
       const ratings = dbRatingData.map(r => r.get({ plain: true }));
      //  console.log("----------------------------------------")
      //  console.log(ratings);
       res.render('dashboard', { ratings, loggedIn: true });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
     
});

module.exports = router;