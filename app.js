require("dotenv").config();
require("./config/mongo");
require("./helpers/hbs");

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const flash = require("connect-flash"); 
const session = require("express-session");
const MongoStore = require("connect-mongo")


// initial config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

// app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partial");

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
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
const favouritesRouter = require("./routes/favourites");

app.use('/', index);
app.use("/dashboard", dashboardRouter); // use product router
app.use("/", userRouter); // use user router
app.use("/favourites", favouritesRouter); // use favourite router



app.listen(process.env.PORT)