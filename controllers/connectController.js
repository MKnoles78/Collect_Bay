// const express = require("express");

// const router = express.Router();

// const db = require("../models");

// module.exports = router;

const express = require("express");
const router = express.Router();

// const db = require("../models");

router.get("/connect", function(req, res) {
  res.render("connect");
});

module.exports = router;
