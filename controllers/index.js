const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const gamehomeRoutes = require('./gamehome-routes.js'); // alternative will see

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use('/gamehome', gamehomeRoutes);

module.exports = router;
 