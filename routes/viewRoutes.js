const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

router.get("/login", authController.isLoggedIn, viewController.login);
router.get("/register", authController.isLoggedIn, viewController.register);

router.get("/", authController.isLoggedIn, viewController.index);
router.get("/tasks", authController.protect, viewController.task);
router.get(
  "/appointments/",
  authController.protect,
  viewController.getAppointments
);
module.exports = router;
