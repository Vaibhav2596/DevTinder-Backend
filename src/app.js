const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log Your Error Message
    res.status(500).send("Something Went Wrong!");
  }
});

app.get("/getUserData", (req, res) => {
  try {
    // Logic of DB call and get user data

    throw new Error("sdfdsfds");
    res.send("User Data Sent");
  } catch (err) {
    res.status(500).send("Some Error contact support team")
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
