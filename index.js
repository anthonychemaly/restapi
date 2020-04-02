const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


//set up express app
const app = express();

app.use(bodyParser.urlencoded({ extended: false })) // I added this. hayde kermel te2der testaamel req.bodys
app.use(bodyParser.json());
app.use('/api',routes)


//listen for requests
app.listen(3000,function(){
    console.log('now listening for requests','\n','where are you my cute little requests','\n' , 'where are you indian nicolas?');
});