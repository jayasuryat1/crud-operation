const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, () => {
  console.log("DB Connection Successful");
});

const app = require("./app"); 

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} SERVER RUNNING ON PORT ${PORT}`);
});
