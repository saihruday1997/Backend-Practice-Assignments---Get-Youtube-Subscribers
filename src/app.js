
const express = require('express');
const app = express();
const Subscriber = require("./models/subscribers");


// Your code goes here

app.get("/subscribers" , (req , res) => {
    Subscriber.find().then((sub) => res.send(sub));
});





















module.exports = app;
