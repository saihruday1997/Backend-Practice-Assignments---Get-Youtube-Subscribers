
const express = require('express');
const app = express();
const data = require("./data");


// Your code goes here

let Subscriber = mongoose.model("subscriber" , data);

app.get("/subscribers" , (req , res) => {
    subscriber.find().then((subscriber) => res.send(subscriber));
});





















module.exports = app;
