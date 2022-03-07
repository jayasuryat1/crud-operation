

const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");



const app = express();



if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}



app.use(express.json());



app.use("/api/v1/users", userRouter);



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



module.exports = app;
