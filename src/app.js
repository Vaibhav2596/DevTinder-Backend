const express = require("express");

const app = express();

// app.use("/route",rh1,rh2,rh3,rh4,rh5)
// app.use("/route",[rh1,rh2,rh3,rh4,rh5])
// app.use("/route",[rh1,rh2,rh3],rh4,rh5)

// GET /users => It checks all the app.xxx("matching route") functions
// GET /users => middleware chain => request handler

// Handle Auth Middleware for all GET POST, ... requests
app.use("/admin",(req,res,next) => {
    // Logic of checking if the request is authorized
  const token = "xyzab";
  const isAdminAuthorized = token === "xyz";
  if(!isAdminAuthorized){
    res.status(401).send("Unauthorized Request");
  }else{
    next();
  }
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


// 1:13