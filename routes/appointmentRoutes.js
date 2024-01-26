const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const router = express.Router();

router.route("/").get(appointmentController.getAllAppointments).post(appointmentController);

module.exports = router;
