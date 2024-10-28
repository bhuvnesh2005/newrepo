const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

exports.addContact = async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
};

exports.updateContact = async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
};

exports.deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
};
