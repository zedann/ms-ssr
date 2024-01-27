const Task = require("../models/taskModel");
const handlerFactory = require("./handlerFactory");

exports.createTask = handlerFactory.createOne(Task);
