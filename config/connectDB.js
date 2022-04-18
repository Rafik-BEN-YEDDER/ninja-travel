//require mongoose

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Fail to connect");
  }
};

module.exports = connectDB;
