const router = require('express').Router();
// const { User } = require('../../models');
const { User, DiceGameSetUp }  = require('../../models');

// Get All

// GET /api/dicegamesetup
router.get('/', (req, res) => {   
   DiceGameSetUp.findAll({
   })   
   .then(dbGameSetUpData => res.json(dbGameSetUpData))
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

module.exports = router;
