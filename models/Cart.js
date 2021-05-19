const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    orderIds: [{ type: Schema.Types.ObjectId, ref: "order" }],
    paymentMethod: {
      type: String,
      required: true,
      enum: ['Credit card', 'Debit card', 'Bank transfer'], 
    },
},
  { timestamps: true }
);

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;

