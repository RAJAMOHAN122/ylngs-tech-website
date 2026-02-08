const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/api/services', (req, res) => {
    const services = [
        { id: 1, name: 'Consulting', description: 'Expert consulting services' },
        { id: 2, name: 'Development', description: 'Custom software development' },
        { id: 3, name: 'Support', description: '24/7 technical support' }
    ];
    res.json(services);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact message received:', { name, email, message });
    res.json({ success: true, message: 'Message received' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`YLNGS Tech website running on port ${PORT}`);
});