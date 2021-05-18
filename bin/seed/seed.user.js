// create a test data set of valid Users
require("dotenv").config();
require("../../config/mongo"); // fetch the db connection
const UserModel = require("../../models/User"); // fetch the model to validate our user document before insertion (in database)

const users = [
    {
        firstName: "Alma",
        lastName: "Regal",
        userName: "AlmaR",
        email: "alma@gmail.com",
        password: "a123",
        photo: "../../public/images/artisan_profile_1.jpg",
        phoneNumber: "999", // only for purchase""
        streetAddress: "123", // only for purchase
        city: "Mexico",
        zipCode: "01020 Álvaro Obregón",
        description: "I was born in Toluca Mexico and I make Paraben-free soaps and dolls.Check my product collection!", 
        bankName: "Banorte", // only for vendors
        bankAccountNumber: "999", // only for vendors
        isAdmin: false,
    },
    {
        firstName: "Hector",
        lastName: "Preciso",
        userName: "HectorP",
        email: "hector@gmail.com",
        password: "h123",
        photo: "../../public/images/man_with_pottery.jpg",
        phoneNumber: "888", // only for purchase""
        streetAddress: "123", // only for purchase
        city: "Mexico",
        zipCode: "02300 Azcapotzalco",
        description: "I was born in Mexico and I produce great coffee in the Chiapas region and also sell honey from the Yucatan region", 
        bankName: "HSBC Mexico", // only for vendors
        bankAccountNumber: "888", // only for vendors
        isAdmin: false,
    },
];

(async function insertUsers() {
  try {
    await UserModel.deleteMany(); // empty the styles db collection
    const inserted = await UserModel.insertMany(users); // insert docs in db
    console.log(`seed users done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
