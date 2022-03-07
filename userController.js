const userModel = require("./../models/userModel");
const catchAsync = require("../Error/catchAsync");

exports.getAllUsers = catchAsync(async (req, res) => {
  const getAllUsers = await userModel.find();
  res.status(200).json({
    status: "success",
    message: "List of all Users",
    data: getAllUsers,
  });
});

exports.getUser = catchAsync(async (req, res) => {
  const getUser = await userModel.findById(req.params.id);
  res
    .status(200)
    .json({ status: "success", requestedUserId: getUser.name, data: getUser });
});

exports.createUser = catchAsync(async (req, res) => {
  const createUser = await userModel.create(req.body);
  res.status(200).json({
    status: "success",
    message: "user created successfully",
    createdUser: createUser,
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  let updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    message: "User updated",
    updatedUser: updateUser,
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
});
