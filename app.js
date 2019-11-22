const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('You are on home'));

// Connect to DB
mongoose.connect(
    process.env.DBCONNECT, 
    { useNewUrlParser: true,
      useUnifiedTopology: true, },
    () => {
        console.log('CONNECTED TO DB');
    }
);

// Listen to server
app.listen(3000);