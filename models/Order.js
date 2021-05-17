const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    vendorId:{ type: Schema.Types.ObjectId, ref: "user" },
    buyerId: { type: Schema.Types.ObjectId, ref: "user" },
    productId: { type: Schema.Types.ObjectId, ref: "product" },
    quantity: Number,
},
  { timestamps: true }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;

