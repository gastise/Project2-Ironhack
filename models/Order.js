const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    id: String,
//  user: vendor id,
//  user: buyer id,
//  productId: ,
    quantity: Number,
    price: Number,
//  paymentMethod: ["credit card", "paypal"]
},
  { timestamps: true }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;