const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const uri = require('./config/mongoURI')
const app = express();

app.use(express.urlencoded({extended: true},),);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(routes);

//connect to mongo
mongoose.connect(uri, {}).then(() => console.log("Connected !"),); 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Started on PORT : "+ PORT,),);