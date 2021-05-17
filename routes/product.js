const express = require("express");
const router = new express.Router();
const ProductModel = require("./../models/Product");
// const uploader = require("./../config/cloudinary");

router.get("/create", (req, res) => {
  res.render("dashboard/productCreate");
});


module.exports = router;