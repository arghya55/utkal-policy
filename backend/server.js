const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DEBUG MIDDLEWARE =================
app.use((req, res, next) => {
  console.log("🔥 REQUEST:", req.method, req.url);
  next();
});



// ================= ROUTES IMPORT =================
const adminRoutes = require("./routes/adminRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const policyRoutes = require("./routes/policyRoutes");
const usersRoutes = require("./routes/usersRoutes");
// const userAuthRoutes = require("./routes/userAuth");


// ================= ROUTES CHECK (IMPORTANT DEBUG) =================
console.log("adminRoutes:", typeof adminRoutes);
console.log("departmentRoutes:", typeof departmentRoutes);
console.log("policyRoutes:", typeof policyRoutes);
console.log("usersRoutes:", typeof usersRoutes);
// console.log("userAuthRoutes:", typeof userAuthRoutes);

// ================= ROUTES USE =================
app.use("/api/admin", adminRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/users", usersRoutes);
// app.use("/api/user", userAuthRoutes);

// ================= DB CONNECT =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// ================= AUTO ADMIN =================
const Admin = require("./models/Admin");
const bcrypt = require("bcrypt");

const createAdmin = async () => {
  try {
    const exists = await Admin.findOne({ username: "admin" });

    if (!exists) {
      const hash = await bcrypt.hash("12345", 10);

      await Admin.create({
        username: "admin",
        password: hash,
      });

      console.log("🔥 Admin created: admin / 12345");
    }
  } catch (err) {
    console.log("Admin error:", err);
  }
};

createAdmin();
// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});