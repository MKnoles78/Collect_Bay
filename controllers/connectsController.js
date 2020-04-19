const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/connect", function (req, res) {
  db.Connect.findAll()
    .then((connects) => {
      console.log(connects);
      res.render("connect", { connects });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/connect", function (req, res) {
  db.Connect.findAll()
    .then((connects) => {
      console.log(connects);
      res.json(connects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/connects/:id", function (req, res) {
  db.Connect.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((connects) => {
      console.log(connects);
      res.json(connects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/connects", function (req, res) {
  const newConnect = {
    author: req.body.author.trim(),
    body: req.body.body.trim(),
  };
  db.Connect.create(newConnect)
    .then((newConnect) => {
      console.log(newConnect);
      res.json({
        message: "Successfully created new message",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/collections/connects/:id", function (req, res) {
  db.Connect.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((numberOfDestroyedRows) => {
      console.log(numberOfDestroyedRows);
      if (numberOfDestroyedRows === 1) {
        res.json({
          success: true,
          message: `Successfully deleted message: ${req.params.id}`,
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: `A problem occurred deleting connect: ${req.params.id}`,
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



