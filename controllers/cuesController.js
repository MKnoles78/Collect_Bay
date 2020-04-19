const express = require("express");

const router = express.Router();

router.get("/cues", function (req, res) {
  res.render("cues");
});

module.exports = router;

