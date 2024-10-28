require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error:', error));

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Route for POST request
app.post('/api/contacts', async (req, res) => {
    try {
        // Assuming Contact is your Mongoose model
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ message: "Server error" });
    }
});
const cors = require('cors');
app.use(cors());

app.post('/api/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

