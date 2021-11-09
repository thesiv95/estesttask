const { Router } = require('express');
const User = require('../models/User');
const get10Last = require('../utils/get10last');

const router = new Router();

// Route for testing & debugging get10Last query
router.get('/last10', async (req, res) => {
    const records = await get10Last()
    return res.status(200).send({ records });
});

// Add new user to DB
router.post('/addUser', async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) res.status(422).send({ error: 'Name and email required' });

        const user = await User.create({ name, email });

        return res.status(201).send({ user });

    } catch (error) {
        return res.status(500).send({ error });
    }
});

module.exports = router;