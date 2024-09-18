// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use("/api", itemRoutes);

app.listen(port, () => {});
