const express = require("express");
const router = express.Router();
const axios = require("axios");

const db = require("../models");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/ebay/:searchTerm", function (req, res) {

  const queryEbay = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=MichaelK-collectb-PRD-c7aae610e-518131be&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${req.params.searchTerm}&paginationInput.entriesPerPage=12`;

  axios.get(queryEbay)
    .then(response => {
      let ebayCollectionsArray = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
      // res.json(ebayCollectionsArray);
      // res.json(ebayCollectionsArray[0]);
      res.render("ebay", {
        ebayCollections: ebayCollectionsArray
      });
    }).catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/ebay", function (req, res) {
  res.render("ebay");
});

router.post("/api/ebaycollections", function (req, res) {

  const newCollection = {
    itemid: req.body.itemid,
    title: req.body.title.trim(),
    category: req.body.category.trim(),
    location: req.body.location.trim(),
    price: req.body.price,
    ebayurl: req.body.ebayurl.trim(),
    image: req.body.image.trim()
  };

  db.EbayCollections.create(newCollection)
    .then((res) => {
      console.log(res);
      // res.json({
      //   message: "Successfully created new collection",
      //   success: true,
      // });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "An error occurred adding your lego to our database",
      });
    });
});


module.exports = router;