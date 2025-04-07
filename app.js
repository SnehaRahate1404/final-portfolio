const express = require("express");
const app = express();
const port = process.env.PORT || 8080; 
const ejsMate = require("ejs-mate");
const path = require("path");
const mongoose = require("mongoose");
const Msg = require("./models/message.js");
require("dotenv").config();



app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs" , ejsMate);
app.use(express.urlencoded({extended:true}));


main().then(() =>{
    console.log("database connected successfully");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio");
  }

app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.post("/" , (req,res)=>{
    let {name , email , message} = req.body;
    let newMsg = new Msg({
        name : name,
        email : email,
        message : message
    })

    newMsg.save().then(res => {
        console.log("response was saved");
    })

    res.redirect("/");
})












app.listen(port , (req,rea) =>{
    console.log("App started successfully");
})