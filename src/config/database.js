const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb://vaibhavchavan40114_db_user:Vaibhav2508@ac-81v0mrm-shard-00-00.rnfqoln.mongodb.net:27017,ac-81v0mrm-shard-00-01.rnfqoln.mongodb.net:27017,ac-81v0mrm-shard-00-02.rnfqoln.mongodb.net:27017/devTinder?ssl=true&replicaSet=atlas-i9wfww-shard-0&authSource=admin&appName=VaibhavChavan");
}

module.exports = connectDB;

