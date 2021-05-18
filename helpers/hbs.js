const hbs = require("hbs");

// CUSTOM HELPERS
hbs.registerHelper("isSelected", function (needle, haystack) {
  return Array.isArray(haystack)
    ? haystack.map((e) => e.name).includes(needle)
      ? "selected"
      : ""
    : haystack.name === needle
    ? "selected"
    : "";
});