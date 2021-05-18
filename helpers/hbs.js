const hbs = require("hbs");

// CUSTOM HELPERS
hbs.registerHelper("isSelected", function (category, product) {
  console.log(category, product)
  return category === product
    ? "selected"
    : "";
});