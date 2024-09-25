// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors"); 


const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", require("./routes/api"));
app.use("/api/", require("./routes/user"));
app.use("/api/", require("./routes/post"));

app.listen(port, () => {});
