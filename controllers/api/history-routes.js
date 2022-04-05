const router = require('express').Router();

const req = require('express/lib/request');
const res = require('express/lib/response');
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
router.get('/:id', (req, res) => {
    History.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbHistoryData => {
        if (!dbHistoryData) {
            res.status(400).json({ message: 'No bet history found with this id!' });
            return;
        }
        res.json(dbHistoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;