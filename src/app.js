const express = require('express');

const app = express();

app.use("/user",(req,res) => {
    res.send("HAHAHAHAHAHAHAHAH")
})

// this will only handle GET call to /users 
app.get("/user",(req,res) => {
    res.send({
        firstName: "Vaibhav",
        lastName : "Chavan"
    })
})

app.post("/user",(req,res) => {
    // Saving Data to DB
    res.send("Data Successfully saved to the database!");
})

app.delete("/user",(req,res) => {
    res.send("Deleted Successfully")
})

// this will match all the HTTP method API calls to /test
app.use("/test",(req,res) => {
    res.send("Hello from the server!");
})

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});