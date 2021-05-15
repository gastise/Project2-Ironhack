const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id: String,
    category: String,
    description: String,
    price: Number,
},
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;