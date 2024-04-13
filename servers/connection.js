const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url, {

    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB");
  }
}

module.exports = connectDB;