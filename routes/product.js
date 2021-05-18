const express = require("express");
const router = new express.Router();
const ProductModel = require("./../models/Product");
const UserModel = require("./../models/User");
const uploader = require("./../config/cloudinary");

router.get("/", (req, res) => {
  res.render("dashboard/dashboard");
});

router.get("/create", (req, res) => {
  res.render("dashboard/productCreate");
});

router.post("/create", uploader.single("photo"), async (req, res, next) => {
  const newProduct = { ...req.body };

  if (!req.file) newProduct.photo = undefined;
  else newProduct.photo = req.file.path;

  try {
    await ProductModel.create(newProduct);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;