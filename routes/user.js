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

//GET - display the vendor's details (from a product page)
router.get("/vendor/:id", async (req, res, next) => {
    const vendor = await UserModel.findById(req.params.id)//go into the user model and find the user that has this id (req.params.id)
    const products = await ProductModel.find({vendorId:req.params.id})// go into the product model and find all the products whose the vendorId equals this id (req.params.id)
    console.log(vendor);
    console.log(products);
    try {
      res.render("vendorpage.hbs", { vendor, products });
    } catch (err) {
      next(err);
    }
    });



module.exports = router;
