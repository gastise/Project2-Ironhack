require("dotenv").config();
require("./config/mongo")

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();


// initial config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
// app.set("views", __dirname + "/views");
// hbs.registerPartial(__dirname + "/partial");


// routers

const index = require('./routes/index');
const productRouter = require("./routes/product");

app.use('/', index);
app.use("/dashboard", productRouter); // use product router



app.listen(3000);



module.exports = app;