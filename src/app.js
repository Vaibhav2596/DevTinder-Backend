const express = require("express");

const app = express();
 
// app.use("/route",rh1,rh2,rh3,rh4,rh5)
// app.use("/route",[rh1,rh2,rh3,rh4,rh5])
// app.use("/route",[rh1,rh2,rh3],rh4,rh5)

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    next();
  }
);

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    res.send("2nd Route Handler")
  }
);


app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
