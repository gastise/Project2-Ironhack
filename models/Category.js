const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    category: Array,
},
  { timestamps: true }
);

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;