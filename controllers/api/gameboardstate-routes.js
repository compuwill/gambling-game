const router = require('express').Router();
const { User, GameboardState, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../../models');
const { route } = require('../home-routes');

// Get All

// GET /api/gameboardstate
router.get('/', (req, res) => {   
   GameboardState.findAll({
   })   
   .then(dbGameSetUpData => res.json(dbGameSetUpData))
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

router.put('/:id', (req, res) => {
   // maybe doing some game logic here before the actuall update
   GameboardState.update({
         dice_1_image_path: req.body.dice_1_image_path, 
         dice_2_image_path: req.body.dice_2_image_path, 
         dice_3_image_path: req.body.dice_3_image_path,
         dice_4_image_path: req.body.dice_4_image_path, 
         dice_5_image_path: req.body.dice_5_image_path, 
         dice_6_image_path: req.body.dice_6_image_path,
         bet_amount: req.body.bet_amount, 
         account_balance: req.body.account_balance, 
         game_message: req.body.game_message,   
         user_id: req.session.user.id  
      },
      {
         where: {
         id: req.params.id
         }
      }
   )
   .then(dbPostData => {
      if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
      }
      res.json(dbPostData);  // common // In the response, we sent back data that has been modified and stored in the database.
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// // Template:
// // POST  
// router01.post('/', (req, res) => {  
//    Post.create({
//      title: req.body.title,
//      post_content: req.body.post_content,
//      user_id: req.session.user_id // user_id: req.body.user_id
//    })
//      .then(dbPostData => res.json(dbPostData)) // common 
//   // .then(dbPostData => { if(!dbPostData) { } res.json(dbPostData); })
//      .catch(err => {
//        console.log(err);
//        res.status(500).json(err);
//      });
// });

// POST /api/gameboardstate
 
router.post('/', (req, res) => {
  //  console.log(req.session);
  GameboardState.create({
      // state: req.body.state,
      dice_1_image_path: req.body.dice_1_image_path, 
      dice_2_image_path: req.body.dice_2_image_path, 
      dice_3_image_path: req.body.dice_3_image_path,
      dice_4_image_path: req.body.dice_4_image_path, 
      dice_5_image_path: req.body.dice_5_image_path, 
      dice_6_image_path: req.body.dice_6_image_path,
      bet_amount: req.body.bet_amount, 
      account_balance: req.body.account_balance, 
      game_message: req.body.game_message,   
      user_id: req.session.user.id // user_id: req.body.user_id
      })
      // .then(dbGameboardStateData => res.json(dbGameboardStateData)) // common 
      .then(dbGameboardStateData => {
         console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
         console.log(dbGameboardStateData.get({ plain: true}));
         console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
         res.json(dbGameboardStateData)
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
 });


module.exports = router;
