const express = require('express');
const graphsqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://trisamsul:sandiaman' +
    '@library-shard-00-00-3e44k.mongodb.net:27017,' +
    'library-shard-00-01-3e44k.mongodb.net:27017,' +
    'library-shard-00-02-3e44k.mongodb.net:27017/library' +
    '?ssl=true&replicaSet=Library-shard-0&authSource=admin&retryWrites=true'
    ,{ useNewUrlParser: true }
);
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB');
});

app.use('/graphql', graphsqlHTTP({
    schema,
    graphql: true
}));

app.listen(8000, ()=>{
    console.log('Server is running: 8000');
});