const express = require("express");
const path = require('path');
const {engine}  = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.engine('handlebars',engine());
app.set("view engine",'handlebars');
app.set('views',path.join(__dirname,'./views'));



const PORT = 3001;
app.get('/',(req,res)=> {
    res.render('home');
})
app.post("/",(req,res)=> {
    console.log(req.body);
})




app.listen(PORT,()=> {
    console.log('app running');
})