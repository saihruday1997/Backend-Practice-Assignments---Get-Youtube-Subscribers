
const express = require('express');
const app = express();
const Subscriber = require("./models/subscribers");


// Your code goes here

app.get("/subscribers" , (req , res) => {
    Subscriber.find().then((sub) => res.send(sub));
});

app.get("/subscribers/names" , (req , res) => {

});

app.get("/subscribers/:id", (req , res) => {
    Subscriber.find({_id : req.params.id})
        .then((sub) => res.send(sub))
        .catch((err) => res.status(400).send({message: err.message}));
});




















module.exports = app;
