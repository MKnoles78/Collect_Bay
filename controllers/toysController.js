const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/toys", function (req, res) {
  db.Toy.findAll()
    .then((toys) => {
      console.log(toys);
      res.render("toys", { toys });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/toys", function (req, res) {
  db.Toy.findAll()
    .then((toys) => {
      console.log(toys);
      res.json(toys);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/toys:id", function (req, res) {
  db.toy.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((toys) => {
      console.log(toys);
      res.json(toys);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/toys", function (req, res) {
  const newToy = {
    category: req.body.category.trim(),
    manufacturer: req.body.manufacturer.trim(),
    make: req.body.make.trim(),
    model: req.body.model.trim(),
    quality: req.body.quality,
  };
  db.Toy.create(newToy)
    .then((newToy) => {
      console.log(newToy);
      res.json({
        message: "Successfully created new toy",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);

    });
});
router.delete("/api/collections/toys/:id", function (req, res) {
  db.Toy.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((numberOfDestroyedRows) => {
      console.log(numberOfDestroyedRows);
      if (numberOfDestroyedRows === 1) {
        res.json({
          success: true,
          message: `Successfully deleted toy: ${req.params.id}`,
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: `A problem occurred deleting toy: ${req.params.id}`,
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