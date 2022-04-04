const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../models');

// router.get('/', withAuth, (req, res) => {
// 
//   res.render('home', { user: req.session.user });
// });

// // router.get('/', withAuth, (req, res) => {
// //   User.findAll({})
// //   .then(dbPostData => {
// //     //  console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
// //     //  console.log(dbPostData[0].get({ plain: true}));
// //     //  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
// //      // // -- serilize and pass a single post object into the homepage template (only pass the first post)
// //      // res.render('homepage', dbPostData[0].get({ plain: true }));  
// // 
// //      // to serialize the entire array
// //      const posts = dbPostData.map(eachdbpost => eachdbpost.get({ plain: true }));
// //     //  res.render('homepage',  { posts } );  
// //     res.render('home', { user: req.session.user });
// //   })
// //   .catch(err => {
// //      console.log(err);
// //      res.status(500).json(err);
// //   });
// //    
// // });

// Render login box to get client inputs
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// FIRST TEST OF Render()
router.get('/', withAuth, (req, res) => {
  // hooked up a template engine use render()
  // does this 'homepage' has anything to do with homepage.handlebars naming, homepage111 wont work
  res.render('gamehome' , {
     id: 1,
     state: 'First landing page after loggin in',
     diceimagepaths: {
        dice_1_image_path: 'images/DiceSix.png',
        dice_2_image_path: 'images/DiceFive.png',
        dice_3_image_path: 'images/DiceFour.png',
        dice_4_image_path: 'images/DiceThree.png',
        dice_5_image_path: 'images/DiceTwo.png',
        dice_6_image_path: 'images/DiceOne.png'
       
     },
     dicegameboard: {
        bet_amount: 45.50,
        account_balance: 200.00,
        game_message: 'no messages' 
     },
     user: {
        username: 'Kimberly-Tester'
     }
  });  
});

module.exports = router;
