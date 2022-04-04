const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, GameboardState, DiceGameSetUp, DiceImagePaths, DiceGameBoard, DiceGamePrize } = require('../models');

// router.get('/', withAuth, (req, res) => {
// 
//   res.render('home', { user: req.session.user });
// });

// -- Route to gameboardlive.handlebars 
router.get('/gameboardlive', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }
   res.render('gameboardlive');
 }); 

 // Render login box to get client inputs
router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }
   res.render('login');
 });

// // // FIRST QUICK TEST OF Render() gamehome view
// // router.get('/', withAuth, (req, res) => {
// //   // hooked up a template engine use render()
// //   // does this 'homepage' has anything to do with homepage.handlebars naming, homepage111 wont work
// //   res.render('gamehome' , {
// //      id: 1,
// //      state: 'First landing page after loggin in',
// //      diceimagepaths: {
// //         dice_1_image_path: 'images/DiceSix.png',
// //         dice_2_image_path: 'images/DiceFour.png',
// //         dice_3_image_path: 'images/DiceTwo.png',
// //         dice_4_image_path: 'images/DiceOne.png',
// //         dice_5_image_path: 'images/DiceThree.png',
// //         dice_6_image_path: 'images/DiceFive.png'
// //        
// //      },
// //      dicegameboard: {
// //         bet_amount: 45.50,
// //         account_balance: 200.00,
// //         game_message: 'no messages' 
// //      },
// //      user: {
// //         username: 'Kimberly-Tester'
// //      }
// //   });  
// // });


// // // SECEND QUICK TEST OF Render() DIFFERENT MODEL : gameboardstate // comment this block out when not in test
// // router.get('/', (req, res) => {
// //    // hooked up a template engine use render()
// //    // does this 'homepage' has anything to do with homepage.handlebars naming, homepage111 wont work
// //    res.render('gamehomelive' , {
// //       id: 1,
// //       dice_1_image_path: 'images/DiceSix.png',
// //       dice_2_image_path: 'images/DiceFive.png',
// //       dice_3_image_path: 'images/DiceFour.png',
// //       dice_4_image_path: 'images/DiceThree.png',
// //       dice_5_image_path: 'images/DiceTwo.png',
// //       dice_6_image_path: 'images/DiceOne.png',
// //       bet_amount: '22.22', // last bet amount - test only
// //       account_balance: '333.33', 
// //       prize_winning_prompt: 'Model GameboardState',  
// //       user: {
// //          username: 'Kimberly-the-Tester'
// //       }
// //    });  
// // });


//-- The actuall action, not quick test with hardcoded data
router.get('/', withAuth, (req, res) => {
  GameboardState.findAll({
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

         // to serialize the entire array
         // const dbgameboardstates = dbGameboardStateData.map(dbgameboardstate => dbgameboardstate.get({ plain: true }));
         //   res.render('gamehomelive',  { dbgameboardstates } );  
         //   res.render('gamehomelive', {
         //     dbgameboardstates,
         //     loggedIn: req.session.loggedIn //conditional rendering
         //   });
         
         // if (false) // to test
         if (dbGameboardStateData.length > 0) 
         {
            // res.render('gamehomelive', dbGameboardStateData[0].get({ plain: true }));  // only interest in the latest one for now
            const dbgameboardstates = dbGameboardStateData.map(dbgameboardstate => dbgameboardstate.get({ plain: true }));
            console.log(dbgameboardstates);
             res.render('gamehomelive',  { dbgameboardstates } );  
         }
         else{
            res.render('gamehomelive' , {
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

router.get('/edit/:id', (req, res) => {
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
         const gameboardstate = dbGameboardStateData.get({ plain: true });

         console.log('mmmmmmmmmmmmmmmmmmmmmm');
         console.log(gameboardstate);

         res.render('edit-gameboardstate', {  // render special view
           gameboardstate,
           loggedIn: true
         });
       } else {
         res.status(404).end();
       }
     })
     .catch(err => {
       res.status(500).json(err);
     });
 });

 
module.exports = router;
