const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
    validate: [validator.isEmail, "Enter correct email id !!"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password should be of mininmum length 12 character"],
    maxlength: [18, "Password should be of mininmum length 18"],
    select: false, // to hide password from database
  },
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  //only run this function if password is modified
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12); //to encrypt the password

  // this.confirmPassword=undefined  //to delete confirm password from database

  next();
});

//instance variable so it is available in all user
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, jwtTimestamp);
  }
  return false; // it means no change in password
};

const User = mongoose.model("userData", userSchema);

module.exports = User;
