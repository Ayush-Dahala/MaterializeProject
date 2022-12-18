const table = require("../models/tableModel");
const data = require("../data.json");
// const parseData=JSON.parse(data)

exports.getTableData = async (req, resp) => {
  try {
    const data = await table.find();
    resp.status(200).json({
      status: "success",
      result: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addTableData = async (req, resp) => {
  try {
    let data = await table.create(req.body);
    resp.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    resp.status(400).json({
      status: "fail",
      result: ["data is not being added", err],
    });
  }
};

exports.deleteData = async (req, resp) => {
  try {
    console.log(req.params);
    let result = await table.findByIdAndDelete(req.params.id);
    resp.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    resp.status(400).json({
      status: "fail",
      result: err,
    });
  }
};

exports.updateData = async (req, resp) => {
  try {
    const result =await table.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    resp.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    resp.status(404).json({
      status: "fail",
      result: err,
    });
  }
};
