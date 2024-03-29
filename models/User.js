const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    // code for password and email taken from day-3 simple-auth-app example
    email: {
      type: String,
      unique: true,
      validate: (email) => {
        return Boolean(
          email.match(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          )
        );
      },
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
    },
    favourites: [{ type: Schema.Types.ObjectId, ref: "product" }],
    phoneNumber: String, // only for purchase
    streetAddress: String, // only for purchase
    city: String,
    zipCode: String,
    description: String,
    bankName: String, // only for vendors
    bankAccountNumber: String, // only for vendors
    isAdmin: Boolean,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
