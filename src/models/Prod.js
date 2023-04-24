import mongoose from 'mongoose';
const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
  prod_name: {
    type: String,
  },
  prod_type: {
    type: String,
  },
  prod_number: {
    type: Number,
  },
});

module.exports.Prod = mongoose.model('Prod', UserSchema);
