const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// Middleware given by express js
app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of the User Model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Get User by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User Not Found");
    }
    res.send(user);

    // const users = await User.find({ emailId: userEmail });

    // if (users.length === 0) {
    //   res.status(404).send("User Not Found");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something Went Wrong!");
  }
});

// Feed API - GET/feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something Went Wrong!");
  }
});

connectDB()
  .then(() => {
    console.log("Database Connection Established");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error(err);
    console.error("Database cannot be connected!!");
  });
