import express from 'express';

const express = require('express');
const { orders, remOrder } = require('../controller/order.controller');

const r_oute = express.Router();

//faire une commande
r_oute.post('/commande/:idProd', orders);
//annuler une commande
r_oute.post('annuler/:idProd', remOrder);

module.exports=r_oute;
