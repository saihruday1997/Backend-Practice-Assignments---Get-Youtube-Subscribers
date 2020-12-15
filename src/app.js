
const express = require('express');
const app = express();
const data = require("./data");


// Your code goes here

app.get("/subscribers" , (req , res) => {
    res.json(data);
});





















module.exports = app;
