import express from 'express';
const express = require('express');

require('dotenv').config();

const PORT=process.env.port||3002
const app = express();
//config
app.user(express.json())
//middleware
app.use("user/",u_oute)
app.use("commande/",r_oute)


app.listen(PORT,()=>{

    console.log('serveur running')
})