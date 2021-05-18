const express = require("express");
const ProductModel = require("../models/Product");
const router = express.Router();

// const bcrypt = require("bcrypt");
// const protectPrivateRoute = require("../middlewares/protectPrivateRoute.js");

// const Category = require("../models/Category");
// const Order = require("../models/Order");
// const User = require("../models/User");

// GET - HOME
router.get("/", async (req, res, next) => {
  try {
    res.render("index.hbs", {
      products: await ProductModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

// GET - HOME & LIVING

router.get("/home-living", async (req, res, next) => {
try {
  res.render("home&living.hbs", {
    products: await ProductModel.find({ category: "Home & Living" })
  });
} catch (err) {
  next(err);
}
});

// GET - PERSONAL CARE

router.get("/personalcare", async (req, res, next) => {
  try {
    res.render("personalcare.hbs", {
      products: await ProductModel.find({ category: "Personal Care" })
    });
  } catch (err) {
    next(err);
  }
  });

// GET - CLOTHING & SHOES

router.get("/clothing-shoes", async (req, res, next) => {
  try {
    res.render("clothing&shoes.hbs", {
      products: await ProductModel.find({ category: "Clothing & Shoes" })
    });
  } catch (err) {
    next(err);
  }
  });

// GET - ACCESSORIES

router.get("/accessories", async (req, res, next) => {
  try {
    res.render("accessories.hbs", {
      products: await ProductModel.find({ category: "Accessories" })
    });
  } catch (err) {
    next(err);
  }
  });

// GET - FOOD & BEVERAGES

router.get("/food-beverages", async (req, res, next) => {
  try {
    res.render("food&beverages.hbs", {
      products: await ProductModel.find({ category: "Food & Beverages" })
    });
  } catch (err) {
    next(err);
  }
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
