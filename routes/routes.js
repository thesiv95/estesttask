const { Router } = require('express');
const User = require('../models/User');

const router = new Router();

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