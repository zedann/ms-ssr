const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
// -------------------------------------------------------------
const mongoose = require("mongoose");
const app = require("./app");
const DB_CONFIG = {
  name: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
const DB = process.env.DB.replace("<DB_USERNAME>", DB_CONFIG.user)
  .replace("<DB_PASSWORD>", DB_CONFIG.password)
  .replace("<DB_NAME>", DB_CONFIG.name);
// console.log(DB);

mongoose.connect(DB).then(() => {
  console.log("DB Connected...");
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
app.listen(PORT, HOST, () => {
  console.log(`server running on ${HOST}:${PORT}`);
});
