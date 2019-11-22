const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Import routes
const homeRoute = require('./routes/home');
const postsRoute = require('./routes/posts');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/', homeRoute);
app.use('/posts', postsRoute);

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