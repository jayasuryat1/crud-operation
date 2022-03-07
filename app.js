// Import Files

const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");

// Using Express Framework

const app = express();

// Development Status of the Requests

if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}

// Input data into json format

app.use(express.json());

//Routes

app.use("/api/v1/users", userRouter);

//Invalid Routes

app.all("*", (req, res, next) => {
  const err = new Error(`${req.originalUrl} is not found!`);
  err.statusCode = 404;
  err.status = "fail";
  next(err);
});

app.use((err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.status || 500;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

//Exporting module

module.exports = app;
