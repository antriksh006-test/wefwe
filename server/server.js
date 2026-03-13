const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
// 1. DYNAMIC PORT: Render will tell the app which port to use via process.env.PORT
const PORT = process.env.PORT || 3000;

// 2. MIDDLEWARE
app.use(cors());
app.use(express.json()); // Allows the server to "read" JSON if you add a POST feature later

// 3. DATA (Your Quotes)
const quotes = [
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" }
];

// 4. API ENDPOINT
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// 5. SERVE FRONTEND (Crucial for Live Deployment)
// This serves your index.html and CSS/JS files from the current folder
app.use(express.static(path.join(__dirname, '.')));

// 6. FALLBACK ROUTE
// If a user types a random URL, send them back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 7. START SERVER
// We use '0.0.0.0' to ensure it's reachable on the public web
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});
// Add this at the very end of your server.js
module.exports = app;