const catchAsync = require("../utils/catchAsync");
const Appointment = require("../models/appointmentModel");
const handlerFactory = require("./handlerFactory");
exports.getAllAppointments = catchAsync(async (req, res, next) => {
  const { group, classType } = req.params;
  res.status(200).json({
    group,
    classType,
  });
});
exports.createAppointment = handlerFactory.createOne(Appointment);
