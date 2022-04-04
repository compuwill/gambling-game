const router = require('express').Router();
const userRoutes = require('./user-routes');
const dicegamesetupRoutes = require('./dicegamesetup-routes');

router.use('/users', userRoutes);
router.use('/dicegamesetup', dicegamesetupRoutes);

module.exports = router;