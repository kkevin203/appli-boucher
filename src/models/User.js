import mongoose from 'mongoose';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  adresse: {
    type: String,
  },
  tel: {
    type: String,
  },
});

module.exports.User = mongoose.model('User', UserSchema);
