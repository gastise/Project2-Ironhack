const express = require("express");
const router = new express.Router();
const ProductModel = require("./../models/Product");
const UserModel = require("./../models/User");
const uploader = require("./../config/cloudinary");

router.get("/", async (req, res, next) => {
  const vendor = await UserModel.findOne({ _id: "60a38d60683e92586f20e0e4" })
  const products = await ProductModel.find({ vendorId: "60a38d60683e92586f20e0e4"})
  try {
    res.render("dashboard/dashboard", { vendor, products });
  } catch (err) {
    next(err);
  }
  });

// GET - update one product
router.get("/update/:id", async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id)
  try {
    res.render("dashboard/productUpdate", product);
  } catch (err) {
    next(err);
  }
});

// POST - update one product
router.post("/update/:id", uploader.single("cover"), async (req, res, next) => {
  try {
    const productToUpdate = { ...req.body };
    if (req.file) productToUpdate.photo = req.file.path;

    await ProductModel.findByIdAndUpdate(req.params.id, productToUpdate);
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
});

// GET - create one product
router.get("/create", (req, res) => {
  res.render("dashboard/productCreate");
});

// POST - create one product
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