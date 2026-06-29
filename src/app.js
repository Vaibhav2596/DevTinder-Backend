const express = require("express");

const app = express();

// /user?userId=101&password=testing
// this will only handle GET call to /users, /user, /user/xyz, /user/1
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({
    firstName: "Vaibhav",
    lastName: "Chavan",
  });
});


// // ac, /abc
// app.get("/ab?c", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

// // ac, /abc
// app.get("/ab+c", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

// ac, /abc
// app.get("/ab*cd", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

// app.get("/a(bc)?d", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

// app.get("/a(bc)+d", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

// Regex
// app.get("/a/", (req, res) => {
//   res.send({
//     firstName: "Vaibhav",
//     lastName: "Chavan",
//   });
// });

app.get("/.*fly/", (req, res) => {
  res.send({
    firstName: "Vaibhav",
    lastName: "Chavan",
  });
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
