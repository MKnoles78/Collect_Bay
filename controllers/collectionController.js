const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/collect", function (req, res) {
  db.Collection.findAll()
    .then((collections) => {
      console.log(collections);
      res.render("collections", { collections });
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
  db.Collection.findAll()
    .then((collections) => {
      console.log(collections);
      res.json(collections);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/:id", function (req, res) {
  db.Collection.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: db.User }],
  })
    .then((collections) => {
      console.log(collections);
      res.json(collections);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections", function (req, res) {
  const newCollection = {
    name: req.body.name.trim(),
    category: req.body.category.trim(),
    itemNum: req.body.itemNum,
    createdAt: req.body.createdAt.trim(),
    updatedAt: req.body.updatedAt.trim(),
  };
  db.Collection.create(newCollection)
    .then((newCollection) => {
      console.log(newCollection);
      res.json({
        message: "Successfully created new collection",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;