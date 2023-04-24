import mongoose from 'mongoose';
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id_user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: String,
    default: Date.now(),
  },
  id_prod: {
    type: mongoose.Types.ObjectId,
    ref: 'prod',
  },
  prix: {
    type: String,
  },
});

module.exports.Order = mongoose.model('Order', OrderSchema);
