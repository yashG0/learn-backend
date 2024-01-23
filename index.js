// import express from 'express';
require('dotenv').config();
const express = require('express');
const app = express();
const defaultPort = 3000;
const port = process.env.PORT || defaultPort;


const myData = {
    "name":"yash",
    "age":19
};

app.get('/', (req, res) => {
    res.send('My home page');
    
})

app.get('/about', (req, res) => {
    res.send('My about page');
})

app.get('/contact',(req,res)=>{
    res.send('<h2>My contact page</h2>');
})

app.get('/github',(req,res)=>{
    res.json(myData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

