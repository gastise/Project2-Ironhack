const express = require("express");
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");

const router = express.Router();

//GET - WHEN YOU CLICK ON FAVOURITES Take the product Id and Add  to the Favourites of the user who is logged in

router.get("/", (req, res) => {
  // const logInUser=req.session.currentUser;
  UserModel.findById(req.session.currentUser._id)
    .populate("favourites")
    .then((dbRes) => {
      console.log(dbRes.favourites);
      res.render("favourites.hbs", { favourites: dbRes.favourites });
    });
});

//POST - WHEN YOU CLICK ON FAVOURITES Take the product Id and Add  to the Favourites of the user who is logged in

router.post("/", (req, res, next) => {
  req.session.currentUser.favourites.push(req.body._id);
  console.log(req.session.currentUser);
  UserModel.findByIdAndUpdate(
    req.session.currentUser._id,
    {
      $push: {
        favourites: req.body._id,
      },
    },
    { new: true }
  ).then(res.redirect("/product/"+req.body._id));
  // console.log(req.session.currentUser.favourites);
});

// GET - Display all the favourites of the favourites page
// the id of the product your on and = productId
// the current logged in USER = buyerID
//
//

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
