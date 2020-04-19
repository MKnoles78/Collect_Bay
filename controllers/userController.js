const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/users", function (req, res) {
  db.User.findAll()
    .then((users) => {
      console.log(users);
      res.render("users", { users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/users/new", function (req, res) {
  res.render("new-user");
});

router.get("/users/:id", function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: db.Collection,
      },
    ],
  })
    .then((user) => {
      console.log(user.Collections);
      res.render("single-user", { user, collections: user.Collections });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/users", function (req, res) {
  db.User.findAll()
    .then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/users/:id", function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/users", function (req, res) {
  const newUser = {
    username: req.body.username.trim(),
    // email: req.body.email.trim(),
    // password: req.body.password.trim(),
    // firstName: req.body.firstName.trim(),
    // lastName: req.body.lastName.trim(),
  };
  db.User.create(newUser)
    .then((newUser) => {
      console.log(newUser);
      res.json({
        message: "Successfully created new user",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;