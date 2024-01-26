const catchAsync = require("../utils/catchAsync");
const Appointment = require("../models/appointmentModel");
const handlerFactory = require("./handlerFactory");
exports.getAllAppointments = handlerFactory.getAll(Appointment);
exports.createAppointment = handlerFactory.createOne(Appointment);
