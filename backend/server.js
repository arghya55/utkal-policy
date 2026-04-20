const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const policyRoutes = require("./routes/policyRoutes");
app.use("/api/policies", policyRoutes);

// connect DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// server start
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});