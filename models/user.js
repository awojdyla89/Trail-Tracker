const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

// const factSchema = new mongoose.Schema({
//     text: String
//   }, {
//     timestamps: true
//   });


  
  const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
  
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);