const router = require('express').Router();
const { User, Rating } = require('../../models');  

// Create API endpoints to execute CRUD on a Post

// GET /api/ratings
router.get('/', (req, res) => {   
   Rating.findAll({
      attributes: ['id', 
                   'score',       
                   'user_id',           
                   'created_at'
                  ],
      order: [['created_at', 'DESC']],  
      include: [ 
         {
            model: User,
            attributes: ['id' , 'username']
         }
      ]
   }) 
   .then(dbRatingData => res.json(dbRatingData))
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// POST /api/ratings - inserts record to the database
router.post('/', (req, res) => {  
   Rating.create({
     score: req.body.score,    
     user_id: req.session.user_id // this session is the bridge  
   })
     .then(dbRatingDate => res.json(dbRatingDate))  
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});
 
 module.exports = router