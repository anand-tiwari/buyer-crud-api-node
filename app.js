const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database").connect();
//regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookies and file middleware
app.use(cookieParser());

const corsConFig = {
    origin: ["http://localhost:8080", "http://localhost:3000"],
    credentials: true,
};
//cors middleware
app.use(cors(corsConFig));

// import all routes
const buyer = require("./routes/buyer");
const packageType = require("./routes/packageType");

//routes middlewares
app.use("/api/v1", buyer); // buyers routes
app.use("/api/v1", packageType); // packageType routes

module.exports = app;