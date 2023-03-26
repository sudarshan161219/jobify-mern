import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "must have name"],
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: [20, "name can not be more than 15 characters"],
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
    required: [true, "must have email"],
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "lastname",
  },

  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "my city",
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
});

const userModel = model("User", userSchema);

export default userModel;
