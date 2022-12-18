const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(() => {
    console.log("database connected established");
  })
  .catch((err) => console.log(err));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connection established", port);
  }
});
