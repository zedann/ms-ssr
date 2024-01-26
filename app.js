const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // serve static files htmls imgs ...
const viewRouter = require("./routes/viewRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const globalErrorHandler = require("./controllers/errorController");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
app.use(helmet());
app.use(morgan("dev"));
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);
// Middlewares
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
app.use(hpp());

// general middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});
// View Routes
app.use("/", viewRouter);

// api Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.use(globalErrorHandler);
module.exports = app;
