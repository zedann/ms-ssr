const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
  days: [
    {
      type: String,
    },
  ],
  date: Number,
  group: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});



const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
