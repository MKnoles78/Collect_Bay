const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/collect", function (req, res) {
  db.Comic.findAll()
    .then((comics) => {
      console.log(comics);
      res.render("collections", { comics });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collect", function (req, res) {
  db.Comic.findAll()
    .then((comics) => {
      console.log(comics);
      res.json(comics);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/comics/:id", function (req, res) {
  db.Comic.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((comics) => {
      console.log(comics);
      res.json(comics);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/comics", function (req, res) {
  const newComic = {
    category: req.body.category.trim(),
    publisher: req.body.publisher.trim(),
    title: req.body.title.trim(),
    issue: req.body.issue,
    quality: req.body.quality.trim(),
  };
  db.Comic.create(newComic)
    .then((newComic) => {
      console.log(newComic);
      res.json({
        message: "Successfully created new comic",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;