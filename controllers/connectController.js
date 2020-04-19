const express = require("express");

const router = express.Router();

router.get("/connect", function (req, res) {
  res.render("connect");
});

module.exports = router;