const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: String,
    category: {
      type: String,
      required: true,
      enum: ['Home & Living', 'Clothing & Shoes', 'Accessories', 'Personal Care', 'Food & Beverage'],
    },
    description: String,
    price: Number,
    itemsRemaining: Number,
},
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;

