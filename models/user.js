const mongoose = require('mongoose');

// Create your User Model

const factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });
  
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    facts: [factSchema]
  
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);