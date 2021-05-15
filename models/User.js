const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: String,
    name: String,
    telephone: Number,
    address: String,
    email: String,
    // bankDetails: 
},
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;