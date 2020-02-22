const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const cars = [
    {model: "chevy", year:2017},
    {model: "Nissan", year:2000},
]

app.get('/api/users',(req,res)=>{
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
        client.db('Cars').collection('items').find().limit(1).skip(1).toArray((err, docs) => {
            console.log(docs)
        })   
    })
})

// app.get('/api/users',(req,res)=>{
//     MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
//         client.db('Cars').collection('items').insertMany(cars, (err, res) => {
//             if(err) {
//                 return console.log(`ERROR: ${err}`)
//             }
//             console.log(res);
//         })
        
//     })
// })

// app.get('/api/users',(req,res)=>{
//     MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
//         client.db('Cars').collection('items').insertOne({
//             model:"Ford",
//             year:2017
//         }, (err, res)=>{
//             if(err) {
//                 return console.log(`ERROR: ${err}`);
//             }
//             console.log(res.ops[0]._id.getTimestamp());
//         });
//     })
// })
 

const port = process.env.PORT || 3001;

app.listen(port);

