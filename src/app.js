
const express = require('express');
const app = express();
const data = require("./data");


// Your code goes here

let Subscriber = mongoose.model("subscriber" , data);

app.get("/subscribers" , (req , res) => {
    Subscriber.find().then(sub => res.send(sub));
});





















module.exports = app;
