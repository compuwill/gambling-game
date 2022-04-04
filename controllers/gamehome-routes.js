// This file will contain all of the user-facing routes, such as the homepage and login page.
const router = require('express').Router();
// const sequelize = require('../config/connection');
const { User, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../models');

// FIRST TEST OF Render()
router.get('/', (req, res) => {
   // hooked up a template engine use render()
   // does this 'homepage' has anything to do with homepage.handlebars naming, homepage111 wont work
   res.render('gamehome' , {
      id: 1,
      state: 'First landing page after loggin in',
      diceimagepaths: {
         dice_1_image_path: 'images/DiceSix.png',
         dice_1_image_path: 'images/DiceFive.png',
         dice_1_image_path: 'images/DiceFour.png',
         dice_1_image_path: 'images/DiceThree.png',
         dice_1_image_path: 'images/DiceTwo.png',
         dice_1_image_path: 'images/DiceOne.png'
        
      },
      dicegameboard: {
         bet_amount: 45.50,
         account_balance: 200.00,
         game_message: 'Welcome Home' 
      },
      user: {
         username: 'Kimberly-Tester'
      }
   });  
});

// // -- Quick /post/:id Test Only
// router.get('/post/:id', (req, res) => {
//    const post = {
//      id: 1,
//      post_content: 'How Come It Does not Show Comments. Please Help Me Out',
//      title: 'Single Post Issue',
//      created_at: new Date(),
//     //  vote_count: 10,
//      comments: [{}, {}],
//      user: {
//        username: 'test_user'
//      }
//    };
//  
//    res.render('single-post', { post });
// });

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
//         res.render('gamehome', {
//           dgsetups,
//           loggedIn: req.session.loggedIn //conditional rendering
//         });
//       })
//       .catch(err => {
//          console.log(err);
//          res.status(500).json(err);
//       });
//  }); 
 
// // // -- Quick /post/:id Test Only
// // router.get('/post/:id', (req, res) => {
// //    const post = {
// //      id: 1,
// //      post_content: 'How Come It Does not Show Comments. Please Help Me Out',
// //      title: 'Single Post Issue',
// //      created_at: new Date(),
// //     //  vote_count: 10,
// //      comments: [{}, {}],
// //      user: {
// //        username: 'test_user'
// //      }
// //    };
// //  
// //    res.render('single-post', { post });
// // });
 
module.exports = router;
