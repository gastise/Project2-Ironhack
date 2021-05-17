const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
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

const InvoiceModel = mongoose.model("invoice", InvoiceSchema);

module.exports = InvoiceModel;

