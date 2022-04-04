const router = require('express').Router();
const userRoutes = require('./user-routes');
const dicegamesetupRoutes = require('./dicegamesetup-routes');
const gameboardstateRoutes = require('./gameboardstate-routes');

router.use('/users', userRoutes);
router.use('/dicegamesetup', dicegamesetupRoutes);
router.use('/gameboardstate', gameboardstateRoutes);

module.exports = router;