// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use("/", require("./routes/userRoutes"));

app.listen(port, () => {});
