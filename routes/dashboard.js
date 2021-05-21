const express = require("express");
const router = new express.Router();
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");
const uploader = require("../config/cloudinary");
const protectPrivateRoute = require("../middlewares/protectPrivateRoute");

router.get("/", protectPrivateRoute, async (req, res, next) => {
  const myUser = req.session.currentUser;
  const vendor = myUser
  const products = await ProductModel.find({ vendorId: myUser._id})
  try {
    res.render("dashboard/dashboard", { vendor, products });
  } catch (err) {
    next(err);
  }
  });

// GET - update one product
router.get("/update/:id", protectPrivateRoute, async (req, res, next) => {
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

// GET - delete one product
router.get("/delete/:id", protectPrivateRoute, async (req, res, next) => {
  try {
    await ProductModel.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
});

// GET - create one product
router.get("/create", protectPrivateRoute, (req, res) => {
  res.render("dashboard/productCreate");
});

// POST - create one product
router.post("/create", uploader.single("photo"), async (req, res, next) => {
  const newProduct = { ...req.body };
  const myUser = req.session.currentUser;

  if (!req.file) newProduct.photo = undefined;
  else newProduct.photo = req.file.path;

  newProduct.vendorId = myUser._id

  try {
    await ProductModel.create(newProduct);
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
});

module.exports = router;