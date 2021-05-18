require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const ProductModel = require("./../../models/Product");

const products = [
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621272258/vvinf6n2pdxp8njrxhz6.jpg",
    name: "Leather huaraches",
    category: "Clothing & Shoes",
    description: "You'll love these colorful handmade huaraches from Michoacán. Super soft leather. Women's size 4.5 MX/7.5 USA/38 EUR.",
    price: 60,
    itemsRemaining: 2,
  },
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621273048/fwhac2hzhvkikudbv6am.jpg",
    name: "Coconut soap",
    category: "Personal Care",
    description: "This 100% organic and antiseptic soap has been produced for generations by a family of artisans in Tabasco using local products and traditions. Great as an everyday hand soap, but also recommended for acne, exfoliation, and oily skin.",
    price: 10,
    itemsRemaining: 0,
    vendorId: "60a38d60683e92586f20e0e3",
  },
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274168/uo04vc3uwyg7fqrdo80e.jpg",
    name: "Huipil blouse",
    category: "Clothing & Shoes",
    description: "This modern twist on the classic Yucatecan huipil is the perfect look for a warm summer day. 100% cotton. Women's size Medium.",
    price: 45,
    itemsRemaining: 5,
  },  
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274300/ifdzl5vnykyxnfijyohp.jpg",
    name: "Double snack dishes",
    category: "Home & Living",
    description: "Add a splash of color to your next gathering! These wooden, hand-painted bowls are made for sharing snacks with loved ones. Each bowl is approximately 15cm wide and 7.5cm deep, joined in the middle. Your purchase goes directly to artisans in Quintana Roo.",
    price: 15,
    itemsRemaining: 2,
  },  
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274583/jygqetkh2dwxwp7bqxrl.jpg",
    name: "Honey",
    category: "Food & Beverage",
    description: "Mexican Yucatan Honey is a bright honey with flavors of peppermint, raisin and caramel. Collected from the orchards outside of Merida, Mexico it is a great addition for your preparations, cakes and recipes.",
    price: 12,
    itemsRemaining: 4,
    vendorId: "60a38d60683e92586f20e0e4",
  },  
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274725/g8z5sejax6paljywsrhk.jpg",
    name: "Organic Coffee (250 g)",
    category: "Food & Beverage",
    description: "This Organic Mexican coffee will sweep you off your feet with its strong body with sweet touches of flowery scents and low acidity It is the perfect addition for your morning routine and start a good day!",
    price: 10,
    itemsRemaining: 2,
    vendorId: "60a38d60683e92586f20e0e4",
  },  
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274843/l4nl5hz6srkoom6dt4ik.jpg",
    name: "Shadow Boxes",
    category: "Home & Living",
    description: "These two shadowboxes were handcrafted and hand painted in Central Mexico. Perfect addition to your home decor to bring some color into your space, they honor Frida Kahlo and Diego Rivera.",
    price: 20,
    itemsRemaining: 1,
  }, 
  {
    photo: "https://res.cloudinary.com/dsejfuqxw/image/upload/v1621274986/o0a0l67dbl5brdwi8txe.jpg",
    name: "Calavera (skull)",
    category: "Home & Living",
    description: "Hand-painted by Mexican Artisans as part of Day of the Dead tradition of honoring the ancestors. Authentic hand-painted ceramic skulls created by artisans from Oaxaca, Mexico.",
    price: 15,
    itemsRemaining: 2,
  }, 
];

(async function insertProducts() {
  try {
    await ProductModel.deleteMany(); // empty the products db collection
    const inserted = await ProductModel.insertMany(products); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();

