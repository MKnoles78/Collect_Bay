const express = require("express");
const Handlebars = require("handlebars");
const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


app.engine("handlebars", exphbs( {
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const comicsRoutes = require("./controllers/comicsController.js");
const userRoutes = require("./controllers/userController.js");
const cardsRoutes = require("./controllers/cardsController.js");
const recordsRoutes = require("./controllers/recordsController.js");
const stampsRoutes = require("./controllers/stampsController.js");
const winesRoutes = require("./controllers/winesController.js");
const toysRoutes = require("./controllers/toysController.js");
const connectRoutes = require("./controllers/connectController.js");
const cuesRoutes = require("./controllers/cuesController.js");
app.use(comicsRoutes);
app.use(cardsRoutes);
app.use(recordsRoutes);
app.use(stampsRoutes);
app.use(winesRoutes);
app.use(toysRoutes);
app.use(userRoutes);
app.use(connectRoutes);
app.use(cuesRoutes);

app.get("/", function (req, res) {
  res.render("index");
});


app.get("/api/config", function (req, res) {
  res.json({
    success: true,
  });
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
