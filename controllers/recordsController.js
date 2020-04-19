const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/records", function (req, res) {
  db.Record.findAll()
    .then((records) => {
      console.log(records);
      res.render("records", { records });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/records", function (req, res) {
  db.Record.findAll()
    .then((records) => {
      console.log(records);
      res.json(records);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/records:id", function (req, res) {
  db.Record.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((records) => {
      console.log(records);
      res.json(records);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/records", function (req, res) {
  const newRecord = {
    category: req.body.category.trim(),
    artist: req.body.artist.trim(),
    album: req.body.album.trim(),
    quality: req.body.quality.trim(),
  };
  db.Record.create(newRecord)
    .then((newRecord) => {
      console.log(newRecord);
      res.json({
        message: "Successfully created new record",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete("/api/collections/records/:id", function (req, res) {
  db.Record.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((numberOfDestroyedRows) => {
      console.log(numberOfDestroyedRows);
      if (numberOfDestroyedRows === 1) {
        res.json({
          success: true,
          message: `Successfully deleted record: ${req.params.id}`,
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: `A problem occurred deleting record: ${req.params.id}`,
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