const express = require("express");
const router = express.Router();
const Policy = require("../models/Policy");


// ✅ CREATE
router.post("/", async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ GET ALL
router.get("/", async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ GET BY CATEGORY
router.get("/category/:cat", async (req, res) => {
  try {
    const policies = await Policy.find({ category: req.params.cat });
    res.json(policies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Policy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Policy.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;