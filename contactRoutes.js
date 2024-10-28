const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Define routes for each CRUD operation
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
});

router.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
});

router.put('/:id', async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
});

router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
});

router.delete('/', async (req, res) => {
    await Contact.deleteMany();
    res.json({ message: 'All contacts deleted' });
});

module.exports = router;
