const express = require("express");
const fs = require("fs");
const User = require("../models/userModel.js");
const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/appError.js");
const factory = require("./handlerFactory.js");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.updateMe = catchAsync(async (req, res, next) => {
  // create an error if user try to update password
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "this route not for password updates, please use /updateMyPassword",
        400
      )
    );
  }
  // filter out fields not allowed to be updated ex role
  const filteredBody = filterObj(req.body, "name", "email");
  // update user document
  console.log(filteredBody);
  exports.updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, {
    active: false,
  });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! please use /signup instead",
  });
};
exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
// do Not change password with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
