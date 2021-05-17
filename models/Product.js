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
    photo: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    },
    price: Number,
    itemsRemaining: Number,
    vendorId:{ type: Schema.Types.ObjectId, ref: "user" },
},
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;

