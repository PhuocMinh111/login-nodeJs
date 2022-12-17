const express = require("express");
const path = require('path');
const {engine}  = require('express-handlebars');

const app = express();
app.engine('handlebars',engine());
app.set("view engine",'handlebars');
app.set('views',path.join(__dirname,'./views'));

const PORT = 3001;
app.get('/',(req,res)=> {
    res.render('home');
})





app.listen(PORT,()=> {
    console.log('app running');
})