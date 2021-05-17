const express = require("express");
const router = new express.Router();
const ProductModel = require("./../models/Product");
// const uploader = require("./../config/cloudinary");

router.get("/", (req, res) => {
  res.render("dashboard/product");
});


module.exports = router;