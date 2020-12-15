
const express = require('express');
const app = express();
const Subscriber = require("./models/subscribers");


// Your code goes here

app.get("/subscribers" , (req , res) => {
    Subscriber.find().then((sub) => res.send(sub));
});

app.get("/subscribers/names" , (req , res) => {
    Subscriber.find().then((sub) => {
        let obj = {
            name: sub.name,
            subscibedChannel: sub.subscibedChannel
        }

        res.send(obj);
    });
});

app.get("/subscribers/:id", (req , res) => {
    let id = req.params.id;

    Subscriber.find({_id : id})
        .then((sub) => res.send(sub))
        .catch((err) => res.status(400).send({message: err.message}));
});




















module.exports = app;
