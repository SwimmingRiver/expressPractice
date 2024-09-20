const express = require("express");
const session = require("express-session");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userName, password } = req.body;
    res.json({ message: "User registered successfully", userName });
  } catch (err) {
    console.error(err);
  }
});
router.post("/signin", async (req, res) => {
  try {
    const { id, pw } = req.body;
    req.session.userName = { id };
    res.send(id, pw);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
