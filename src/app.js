const express = require("express");

const app = express();
 
// app.use("/route",rh1,rh2,rh3,rh4,rh5)
// app.use("/route",[rh1,rh2,rh3,rh4,rh5])
// app.use("/route",[rh1,rh2,rh3],rh4,rh5)

app.use(
  "/user",
  [(req, res, next) => {
    // Route Handler
    // res.send("Route Handler 1");
    console.log("Handling the route user!!");
    // res.send("Response!!");
    next();
    // res.send("Response!!");
  },
  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!!");
    next();
  },
  (req, res, next) => {
    // Route Handler 3
    console.log("Handling the route user 3!!");
    // res.send("3rd Response!!");
    next();
  },
  (req, res, next) => {
    // Route Handler 4
    console.log("Handling the route user 4!!");
    // res.send("4rd Response!!");
    next();
  },
    (req, res, next) => {
    // Route Handler 4
    console.log("Handling the route user 5!!");
    res.send("5th Response!!");
    // next();
  }]
);


// 28 minutes

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
