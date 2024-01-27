const Appointment = require("../models/appointmentModel");
const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");

exports.index = async (req, res, next) => {
  try {
    let appointment;
    if (req.user) {
      appointment = await Appointment.findOne({
        class: req.user.class,
        group: req.user.group,
      });
    }

    res.status(200).render("base", { title: "الصفحة الرائيسية", appointment });
  } catch (error) {
    res
      .status(400)
      .render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.login = (req, res, next) => {
  try {
    res.status(200).render("pages/loginPage", { title: "تسجيل الدخول" });
  } catch (error) {
    res
      .status(400)
      .render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.register = (req, res, next) => {
  try {
    res.status(200).render("pages/registerPage", { title: "تسجيل طالب" });
  } catch (error) {
    res
      .status(400)
      .render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.task = async (req, res, next) => {
  try {
    let tasks;
    if (req.user) {
      tasks = await Task.find({
        class: req.user.class,
        group: req.user.group,
        active: { $ne: false },
      });
    }
    console.log(tasks);
    res.status(200).render("pages/tasksPage", { title: "الواجب", tasks });
  } catch (error) {
    res
      .status(400)
      .render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.getAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find();
  res
    .status(200)
    .render("pages/appointmentPage", { appointments, title: "المواعيد" });
});
