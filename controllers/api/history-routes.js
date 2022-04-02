const router = require('express').Router();

const sequelize = require('express/lib/response');
const { History, User } = require('../../models');

// GET betting history /api/history
router.get('/', (req, res) => {
    History.findAll({
        attributes: ['id', 'user_id', 'winnings'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbHistoryData => res.json(dbHistoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/history/1
//router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;