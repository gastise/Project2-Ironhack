



// base dependencies
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();


// initial config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
// app.set("views", __dirname + "/views");
// hbs.registerPartial(__dirname + "/partial");


// routers

const index = require('./routes/index');
app.use('/', index);



app.listen(3000);



module.exports = app;