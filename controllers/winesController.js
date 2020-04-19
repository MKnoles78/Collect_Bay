const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/wines", function (req, res) {
  db.Wine.findAll()
    .then((wines) => {
      console.log(wines);
      res.render("wines", { wines });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/wines", function (req, res) {
  db.Wine.findAll()
    .then((wines) => {
      console.log(wines);
      res.json(wines);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/wines:id", function (req, res) {
  db.Wine.findOne({
    where: {
      id: req.params.id,
    },
    // include: [{ model: db.User }],
  })
    .then((wines) => {
      console.log(wines);
      res.json(wines);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/collections/wines", function (req, res) {
  const newWine = {
    category: req.body.category.trim(),
    vineyard: req.body.vineyard.trim(),
    style: req.body.style.trim(),
    variety: req.body.style.trim(),
    vintage: req.body.vintage,
    winegrade: req.body.winegrade,
  };
  db.Wine.create(newWine)
    .then((newWine) => {
      console.log(newWine);
      res.json({
        message: "Successfully created new wine",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);

    });
});
router.delete("/api/collections/wines/:id", function (req, res) {
  db.Wine.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((numberOfDestroyedRows) => {
      console.log(numberOfDestroyedRows);
      if (numberOfDestroyedRows === 1) {
        res.json({
          success: true,
          message: `Successfully deleted wine: ${req.params.id}`,
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: `A problem occurred deleting wine: ${req.params.id}`,
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