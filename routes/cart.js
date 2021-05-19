const express = require("express");
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");
const OrderModel = require("../models/Order");

const router = express.Router();

//GET Add the productID to the Favourites of the user who is logged in






// when you click add to cart => generate an order : 
//the order will take : 
// the id of the product your on and = productId
// the current logged in USER = buyerID
//
// router.get("/", async (req, res, next) => {


// });

//GET Display the cart

// router.get("/", async (req, res, next) => {
//     // find all of the orders that have the buyer id of the person who is logged in 
//     //THEN loop throughthrough all their orders

//     try {
//       res.render("viewcart.hbs");
//     } catch (err) {
//       next(err);
//     }
//     });


module.exports = router;
