const User = require("../models/userModel");

exports.getAllUser = async (req, resp) => {
  try {
    const users = await User.find();
    resp.status(200).json({
      result: "success",
      data: users,
    });
  } catch (err) {
    resp.status(404).json({
      result: "fail",
    });
  }
};
exports.createAllUser = async (req, resp) => {
  resp.send("add user");
};
exports.getUser = async (req, resp) => {
  resp.send("get user");
};
exports.updateUser = async (req, resp) => {
  resp.send("update User");
};
exports.deleteUser = async (req, resp) => {
  resp.send("delete User");
};
