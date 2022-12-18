const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_KEY, {
    expiresIn: process.env.Expires,
  });
};

exports.signup = async (req, resp, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    const token = signToken(newUser._id);
    resp.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    resp.status(404).json({
      result: err,
    });
  }
};

exports.login = async (req, resp, next) => {
  const { email, password } = req.body;

  //check if email and password exist
  if (!email || !password) {
    return resp.status(404).send("Please provide email and password");
  }

  //Check if  user exist and password is correct
  const user = await User.findOne({ email }).select("+password"); //to select password since when we make it slect false it get remove from db

  if (!user || !(await user.correctPassword(password, user.password))) {
    return resp.status(401).send("incorrect email or password");
  }

  //If everything ok, send token to client
  const token = signToken(user._id);
  resp.status(200).json({
    status: "success",
    token,
    user,
  });
};

exports.protect = async (req, resp, next) => {
  //1)getting token from headers and check if it is there
  let token,decoded;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return resp
      .status(401)
      .send("You are not logged in plz login to access !!");
  }

  //2)verification of token

  try {
    decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY);
    console.log(decoded);
  } catch {
    resp.status(201).json({
      status: "fail",
      message: "invalid token or token get expired",
    });
  }
  //3)check if user still exist

  const freshUser=await User.findById(decoded.id);
  if(!freshUser){
    return resp.status(201).json({
      status:"fail",
      message:"user no longer exist"
    })
  }
  //if user change the password after login
  freshUser.changedPasswordAfter(decoded.iat)

  next();
};
