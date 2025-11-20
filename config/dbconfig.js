require('dotenv').config(); // Load .env file contents into process.env
const mongoose = require('mongoose');

const uri = process.env.mongodb_url; // Get the connection string from environment variables

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error'));