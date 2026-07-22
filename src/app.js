const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData, validateEmailId } = require("./utils/validation");
const bcrypt = require("bcrypt");

// Middleware given by express js
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);

    const {firstName,lastName,emailId,password} = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password,10)


    // Creating a new instance of the User Model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password : passwordHash
    });

    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try{
    const {emailId, password} = req.body;

    validateEmailId(emailId)

    const user = await User.findOne({emailId : emailId});
    if(!user){
      throw new Error("Invalid Credentials")
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(isPasswordValid){
      res.send("Login Successful!!!")
    }
    else{
      throw new Error("Invalid Credentials")
    }
  }catch(err){
    res.status(400).send("ERROR : " + err.message)
  }
})

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

// Get User by id
app.get("/userbyid", async (req, res) => {
  const userId = req.body.Id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).send("User Not Found");
    }
    res.send(user);
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

// Delete a User from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    // const user = await User.findByIdAndDelete({_id : userId});
    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully");
  } catch (err) {
    res.status(400).send("Something Went Wrong!");
  }
});

// Update data of the user
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) => {
      return ALLOWED_UPDATES.includes(k);
    });

    if (!isUpdateAllowed) {
      throw new Error("Update Not Allowed!");
    }

    if (data?.skills && data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed " + err.message);
  }
});

// Update data of the user by emailid
app.patch("/userbyemail", async (req, res) => {
  const userEmail = req.body.emailId;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({ emailId: userEmail }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User Updated Successfully");
  } catch (err) {}
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
