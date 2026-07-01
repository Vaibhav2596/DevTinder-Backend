const express = require("express");

const app = express();

// app.use("/route",rh1,rh2,rh3,rh4,rh5)
// app.use("/route",[rh1,rh2,rh3,rh4,rh5])
// app.use("/route",[rh1,rh2,rh3],rh4,rh5)

// GET /users => It checks all the app.xxx("matching route") functions
// GET /users => middleware chain => request handler

app.use("/", (req,res,next) => {
  // res.send("Handling / route");
  next()
});

app.get(
  "/user",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    res.send("2nd Route Handler");
  },
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

// 46 minutes