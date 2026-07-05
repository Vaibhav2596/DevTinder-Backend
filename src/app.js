const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth")

const app = express();

// app.use("/route",rh1,rh2,rh3,rh4,rh5)
// app.use("/route",[rh1,rh2,rh3,rh4,rh5])
// app.use("/route",[rh1,rh2,rh3],rh4,rh5)

// GET /users => It checks all the app.xxx("matching route") functions
// GET /users => middleware chain => request handler

// Handle Auth Middleware for all GET POST, ... requests
app.use("/admin",adminAuth)

app.post("/user/login",(req,res) => {
  res.send("User logged in successfully!")
})

app.get("/user/data",userAuth, (req,res) => {
  res.send("User Data Sent")
})

app.get("/admin/getAllData",(req, res, next) => {
  res.send("All Data Sent")
})

app.get("/admin/deleteUser",(req, res, next) => {
  // Logic of checking if the request is authorized
  res.send("Deleted a user")
})

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
