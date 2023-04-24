import express from 'express';
import {orders,remOrder} from '../controller/order.controller'
import {signin,signup,updUser} from '../controller/user.controller'

const express = require('express');
const { orders, remOrder } = require('../controller/order.controller');
const {signin,signup,updUser}= require('../controller/user.controller')

const u_oute = express.Router();

u_oute.post('/signin/', signin);

u_oute.post('inscription/:idProd', signup);
u_oute.post('update/:iduser', updUser);

module.exports=u_oute
