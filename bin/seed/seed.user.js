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
        photo: "/images/alma.jpg",
        phoneNumber: "999", // only for purchase""
        streetAddress: "Calle miel #123", // only for purchase
        city: "Tizimin",
        zipCode: "01020",
        description: "I was born in the village of Tizimin, Yucatan and love sharing our local honey and handmade blouses with the world!", 
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
        photo: "/images/man_with_pottery.jpg",
        phoneNumber: "888", // only for purchase""
        streetAddress: "123", // only for purchase
        city: "San Cristobal",
        zipCode: "02300",
        description: "I was born outside of San Cristobal and my family produces great coffee in the Chiapas region. I have also been making pottery for decades!", 
        bankName: "HSBC Mexico", // only for vendors
        bankAccountNumber: "888", // only for vendors
        isAdmin: false,
    },
    {
      firstName: "Juana",
      lastName: "Perez",
      userName: "JuanaP",
      email: "juanita@gmail.com",
      password: "m123",
      photo: "/images/artisan_profile_1.jpg",
      phoneNumber: "123456789", // only for purchase""
      streetAddress: "12", // only for purchase
      city: "Chetumal",
      zipCode: "56432",
      description: "I am originally from Chiapas but currently live in Chetumal, Quintana Roo. I make hand-painted home decor and parabens-free soap with my 3 sisters.", 
      bankName: "Banamex", // only for vendors
      bankAccountNumber: "093849382729", // only for vendors
      isAdmin: false,
  },
  {
    firstName: "Lucia",
    lastName: "Rodriguez",
    userName: "LucyR",
    email: "lucyrod@gmail.com",
    password: "l123",
    photo: "/images/lucia.jpg",
    phoneNumber: "56784563", // only for purchase""
    streetAddress: "calle Lopez #87", // only for purchase
    city: "Uruapan",
    zipCode: "87342",
    description: "I am from a family of artisans in the beautiful state of Michaocan. My husband makes shoes and sandals and I make colorful hand-painted decorations embodying the spirit of Mexico. Thank you for supporting our work!", 
    bankName: "Banamex", // only for vendors
    bankAccountNumber: "093849382729", // only for vendors
    isAdmin: false,
},
{
  firstName: "Carlos",
  lastName: "Mendez",
  userName: "CharlieM",
  email: "charliem@gmail.com",
  password: "c123",
  photo: "/images/carlos.jpg",
  phoneNumber: "09873567", // only for purchase""
  streetAddress: "calle Juarez #7", // only for purchase
  city: "Tepic",
  zipCode: "34678",
  description: "I am a Huichol artisan from the state of Nayarit. Our elaborate designs represet our unique world view and our techniques are highly regarded around the world.", 
  bankName: "Banamex", // only for vendors
  bankAccountNumber: "093849382729", // only for vendors
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
