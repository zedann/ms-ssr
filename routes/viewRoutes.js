const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");
router.get("/", viewController.index);
router.get("/tasks", authController.protect, viewController.task);
router.get("/login", viewController.login);
router.get("/register", viewController.register);

module.exports = router;
