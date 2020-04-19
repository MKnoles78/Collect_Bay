const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/stamps", function (req, res) {
  db.Stamp.findAll()
    .then((stamps) => {
      console.log(stamps);
      res.render("stamps", { stamps });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/stamps", function (req, res) {
  db.Stamp.findAll()
    .then((stamps) => {
      console.log(stamps);
      res.json(stamps);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/stamps:id", function (req, res) {
  db.Stamp.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((stamps) => {
      console.log(stamps);
      res.json(stamps);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/stamps", function (req, res) {
  const newStamp = {
    category: req.body.category.trim(),
    origincountry: req.body.origincountry.trim(),
    class: req.body.class.trim(),
    postmark: req.body.postmark.trim(),
    quality: req.body.quality.trim(),
  };
  db.Stamp.create(newStamp)
    .then((newStamp) => {
      console.log(newStamp);
      res.json({
        message: "Successfully created new stamp",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);

    });
});
router.delete("/api/collections/stamps/:id", function (req, res) {
  db.Stamp.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((numberOfDestroyedRows) => {
      console.log(numberOfDestroyedRows);
      if (numberOfDestroyedRows === 1) {
        res.json({
          success: true,
          message: `Successfully deleted stamp: ${req.params.id}`,
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: `A problem occurred deleting stamp: ${req.params.id}`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
      });
    });
});

module.exports = router;