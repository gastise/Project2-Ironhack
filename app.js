require("dotenv").config();
require("./config/mongo");
require("./helpers/hbs");

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const flash = require("connect-flash"); 
const session = require("express-session");



// initial config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

// app.set("views", __dirname + "/views");
// hbs.registerPartial(__dirname + "/partial");

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// FLASH MESSAGES
// enable "flash messaging" system : a message persisting during 1 http call (ex: redirect)
// flash relies on the express-session mechanism
// session config MUST be declared first !!!!
app.use(flash());

// CUSTOM MIDDLEWARES
// expose flash message to the hbs templates, if any flash-message is defined
app.use(require("./middlewares/exposeFlashMessage"));

// expose login status to the hbs templates
app.use(require("./middlewares/exposeLoginStatus"));


// routers

const index = require('./routes/index');
const dashboardRouter = require("./routes/dashboard");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");

app.use('/', index);
app.use("/dashboard", dashboardRouter); // use product router
app.use("/", userRouter); // use user router
app.use("/cart", cartRouter); // use cart router



app.listen(process.env.PORT)