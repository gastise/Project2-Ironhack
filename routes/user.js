const express = require("express");
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");
const router = express.Router();

// GET - the product details
router.get("/product/:id", async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id)
    console.log(product);
    try {
      res.render("products.hbs",product);
    } catch (err) {
      next(err);
    }
    });

//GET - display the vendor's details
router.get("/vendorpage", async (req, res, next) => {
    const vendor = await UserModel.findOne({ _id: "60a38d482d399a12cbf43d43" })
    const products = await ProductModel.find({ vendorId: "60a38d482d399a12cbf43d43"})
    console.log(vendor);
    console.log(products);
    try {
      res.render("vendorpage.hbs", { vendor, products });
    } catch (err) {
      next(err);
    }
    });



module.exports = router;
