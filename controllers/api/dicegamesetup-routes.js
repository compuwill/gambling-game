const router = require('express').Router();
// const { User } = require('../../models');
// const { User, DiceGameSetUp }  = require('../../models');
const { User, GameboardState, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../../models');

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

// POST /api/dicegamesetup

// -- The / designates Home
router.post('/', (req, res) => {
  //  console.log(req.session);
  DiceGameSetUp.create({
      attributes: [
         'id',
         'state' 
      ],
      include: [
         {
            model: DiceImagePaths,
            attributes: ['id', 'dice_1_image_path', 'dice_2_image_path', 'dice_3_image_path'
                             ,'dice_4_image_path', 'dice_5_image_path', 'dice_6_image_path']
         },
         {
            model: DiceGameBoard,
            attributes: ['id', 'bet_amount', 'account_balance', 'game_message'],
            include: {
               model: DiceGamePrize,
               attributes: ['id','is_five_kind', 'is_four_kind', 'is_three_kind', 'is_straight']
               }
         },
         {
            model: User,
            attributes: ['username', 'cash']
         }
      ]
      })
      .then(dbDiceGameSetUpData => {
         console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
         console.log(dbDiceGameSetUpData[0].get({ plain: true}));
         console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
         // // -- serilize and pass a single post object into the homepage template (only pass the first post)
         // res.render('homepage', dbDiceGameSetUpData[0].get({ plain: true }));  

         // to serialize the entire array
         const dgsetups = dbDiceGameSetUpData.map(dgsetup => dgsetup.get({ plain: true }));
      //   res.render('homepage',  { dgsetups } );  
        res.render('gamehome', {
          dgsetups,
          loggedIn: req.session.loggedIn //conditional rendering
        });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
 });


module.exports = router;
