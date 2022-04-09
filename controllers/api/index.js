const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
const historyRoutes = require('./history-routes');
const ratingRoutes = require('./rating-routes')

router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/history', historyRoutes);
router.use('/ratings', ratingRoutes )

module.exports = router;