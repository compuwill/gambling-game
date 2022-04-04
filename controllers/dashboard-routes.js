 const router = require('express').Router();
// const sequelize = require('../config/connection');
const withAuth = require('../utils/auth'); 
const { User, GameboardState, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../models');

// Find all GameboardState for this particular user/player (many but expect no more than 1)
router.get('/', withAuth, (req, res) => {
   GameboardState.findAll({             
      where: {
         // user_id: req.session.user_id
         user_id: req.session.user.id
      },
      attributes: [
         'id',
         'dice_1_image_path',
         'dice_2_image_path',
         'dice_3_image_path',
         'dice_4_image_path',
         'dice_5_image_path',
         'dice_6_image_path',
         'bet_amount', // last bet amount 
         'account_balance', 
         'prize_winning_prompt',   
      ],
      include: [
         {
            model: User,
            attributes: ['username', 'id', 'cash']
         }
      ]
      })
      .then(dbGameboardStateData => {
         // // console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
         // // console.log(dbGameboardStateData[0].get({ plain: true})); 
         // // console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
         
         // if (false) // to test
         if (dbGameboardStateData.length > 0) 
         {
            // res.render('gamehomelive', dbGameboardStateData[0].get({ plain: true }));  // only interest in the latest one for now
            const dbgameboardstates = dbGameboardStateData.map(dbgameboardstate => dbgameboardstate.get({ plain: true }));
            console.log(dbgameboardstates);
            res.render('dashboard',  { dbgameboardstates, loggedIn: true  } );  
         }
         else{
            res.render('dashboard' , {
               id: 1,
               dice_1_image_path: 'images/DiceOne.png',
               dice_2_image_path: 'images/DiceTwo.png',
               dice_3_image_path: 'images/DiceThree.png',
               dice_4_image_path: 'images/DiceFour.png',
               dice_5_image_path: 'images/DiceFive.png',
               dice_6_image_path: 'images/DiceSix.png',
               bet_amount: 0.00,  
               account_balance: 0.00, 
               prize_winning_prompt: 'No Messages',  
               user: {
                  username: req.session.user.username,
                  id: req.session.user.id
               }
            });  
         }
         
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
  }); 


// Look at query string for more info
router.get('/edit/:id', withAuth, (req, res) => {
   GameboardState.findByPk(req.params.id, {
      attributes: [
         'id',
         'dice_1_image_path',
         'dice_2_image_path',
         'dice_3_image_path',
         'dice_4_image_path',
         'dice_5_image_path',
         'dice_6_image_path',
         'bet_amount', // last bet amount 
         'account_balance', 
         'prize_winning_prompt',
      ],
      include: [
            {
               model: User,
               attributes: ['username', 'id', 'cash']
            }
      ]
   })
   .then(dbGameboardStateData => {
      if (dbGameboardStateData) {
         const dbgameboardstate = dbGameboardStateData.get({ plain: true });
         console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmed');
         console.log(dbgameboardstate);
         res.render('edit-gameboardstate',  { dbgameboardstate, loggedIn: true  } );
         // res.render('edit-gameboardstate',  { dbgameboardstate, loggedIn: true  } );  
      } else {
         res.status(404).end();
      }
   })
   .catch(err => {
      res.status(500).json(err);
   });
});  

 
 // // FIRST TEST OF Render()
// router.get('/', (req, res) => {
//    // hooked up a template engine use render()
//    // does this 'homepage' has anything to do with homepage.handlebars naming, homepage111 wont work
//    res.render('dashboard' , {
//       id: 1,
//       state: 'First landing page after loggin in',
//       diceimagepaths: {
//          dice_1_image_path: 'images/DiceTwo.png',
//          dice_2_image_path: 'images/DiceFour.png',
//          dice_3_image_path: 'images/DiceSix.png',
//          dice_4_image_path: 'images/DiceFive.png',
//          dice_5_image_path: 'images/DiceThree.png',
//          dice_6_image_path: 'images/DiceOne.png'
//         
//       },
//       dicegameboard: {
//          bet_amount: 45.50,
//          account_balance: 200.00,
//          game_message: 'Welcome Home' 
//       },
//       user: {
//          username: 'Kimberly-Tester'
//       }
//    });  
// });

//--
  

// // -- The / designates Home
// router.get('/', (req, res) => {
//   //  console.log(req.session);
//   DiceGameSetUp.findAll({
//       attributes: [
//          'id',
//          'state' 
//       ],
//       include: [
//          {
//             model: DiceImagePaths,
//             attributes: ['id', 'dice_1_image_path', 'dice_2_image_path', 'dice_3_image_path'
//                              ,'dice_4_image_path', 'dice_5_image_path', 'dice_6_image_path']
//          },
//          {
//             model: DiceGameBoard,
//             attributes: ['id', 'bet_amount', 'account_balance', 'game_message'],
//             include: {
//                model: DiceGamePrize,
//                attributes: ['id','is_five_kind', 'is_four_kind', 'is_three_kind', 'is_straight']
//                }
//          },
//          {
//             model: User,
//             attributes: ['username', 'cash']
//          }
//       ]
//       })
//       .then(dbDiceGameSetUpData => {
//          console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//          console.log(dbDiceGameSetUpData[0].get({ plain: true}));
//          console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
//          // // -- serilize and pass a single post object into the homepage template (only pass the first post)
//          // res.render('homepage', dbDiceGameSetUpData[0].get({ plain: true }));  
// 
//          // to serialize the entire array
//          const dgsetups = dbDiceGameSetUpData.map(dgsetup => dgsetup.get({ plain: true }));
//       //   res.render('homepage',  { dgsetups } );  
//         res.render('dashboard', {
//           dgsetups,
//           loggedIn: req.session.loggedIn //conditional rendering
//         });
//       })
//       .catch(err => {
//          console.log(err);
//          res.status(500).json(err);
//       });
//  }); 
 
module.exports = router;
