const express = require("express");
const router = express.Router();

// const bcrypt = require("bcrypt");
// const protectPrivateRoute = require("../middlewares/protectPrivateRoute.js");

// const Category = require("../models/Category");
// const Order = require("../models/Order");
// const Product = require("../models/Product");
// const User = require("../models/User");


// GET - HOME
router.get("/", (req, res) => {
    res.render("index.hbs");
  });


  // GET - HOME & LIVING

  router.get("/home&living", (req, res) => {
    res.render("home&living.hbs");
  });

  // GET - PERSONAL CARE

  router.get("/personalcare", (req, res) => {
    res.render("personalcare.hbs");
  });

  // GET - CLOTHING & SHOES

  router.get("/clothing&shoes", (req, res) => {
    res.render("clothing&shoes.hbs");
  });

    // GET - ACCESSORIES

    router.get("/accessories", (req, res) => {
      res.render("accessories.hbs");
    });

      // GET - FOOD & BEVERAGES

  router.get("/food&beverages", (req, res) => {
    res.render("food&beverages.hbs");
  });




    // GET - ABOUT US

    router.get("/about-us", (req, res) => {
      res.render("aboutus.hbs");
    });
  

    // GET - FAQ

    router.get("/faq", (req, res) => {
      res.render("faq.hbs");
    });


    // GET - CONTACT

    router.get("/contact", (req, res) => {
      res.render("contact.hbs");
    });


  // GET - LOGIN

  router.get("/login", (req, res) => {
    res.render("login.hbs");
  });


  // POST login


  // GET - SIGN UP

  router.get("/signup", (req, res) => {
    res.render("signup.hbs");
  });
  

  // POST - send the Sign up form

  router.post("/signup", async (req, res, next) => {
    try {
      const newUser = { ...req.body };
      const foundUser = await User.findOne({ email: newUser.email });
      console.log(newUser);
      if (foundUser) {
        req.flash("warning", "email already registered");
        res.redirect("/signup");
      } else {
        const hashedPassword = bcrypt.hashSync(newUser.password, 10);
        newUser.password = hashedPassword;
        await User.create(newUser);
        req.flash("success", "congrats! You are registered");
        res.redirect("/login");
      }
    } catch (err) {
      var errorMsg = "";
      for (field in err.errors) {
        errorMsg += err.errors[field].message + "\n";
      }
      req.flash("error", errorMsg);
      res.redirect("/signup");
    }
  });





module.exports = router;