const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Define routes for each CRUD operation
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

router.delete('/', async (req, res) => {
    await User.deleteMany();
    res.json({ message: 'All users deleted' });
});

module.exports = router;
