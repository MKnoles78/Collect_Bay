const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/cards", function (req, res) {
  db.Card.findAll()
    .then((cards) => {
      console.log(cards);
      res.render("cards", { cards });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/cards", function (req, res) {
  db.Card.findAll()
    .then((cards) => {
      console.log(cards);
      res.json(cards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/cards:id", function (req, res) {
  db.Card.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((cards) => {
      console.log(cards);
      res.json(cards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/cards", function (req, res) {
  const newCard = {
    category: req.body.category.trim(),
    manufacturer: req.body.manufacturer.trim(),
    player: req.body.player.trim(),
    year: req.body.year,
    quality: req.body.quality.trim(),
  };
  db.Card.create(newCard)
    .then((newCard) => {
      console.log(newCard);
      res.json({
        message: "Successfully created new card",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;