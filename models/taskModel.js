const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  group: {
    type: Number,
  },
  class: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
