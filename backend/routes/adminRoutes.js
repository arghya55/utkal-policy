const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("🔥 LOGIN REQUEST:", req.body);

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 🔥 JWT TOKEN
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login success",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// ================= TEST ROUTE =================
router.get("/me", (req, res) => {
  res.json({ message: "Admin route working" });
});

module.exports = router;


