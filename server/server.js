const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// Allow requests from any Netlify domain (your frontend)
app.use(cors());
app.use(express.json());

// DATA (Your Quotes)
const quotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" }
];

// API ENDPOINT
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// START SERVER (for local dev)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});

module.exports = app;