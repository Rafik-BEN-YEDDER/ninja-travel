//importaion
const express = require("express");

//creation instance
const app = express();
//require dotenv

require("dotenv").config();

//connect DB
const connectDB = require("./config/connectDB");
const Voyage = require("./model/Voyage");
connectDB();

//json
app.use(express.json());

//route global
app.use("/api/projet", require("./routes/projet"));


//creation serveur

const port = process.env.PORT;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`server is running on port ${port}`);
});

