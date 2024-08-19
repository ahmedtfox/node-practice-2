const express = require("express");
const path = require("path");
const router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded());

router.get("/", (req, res, next) => {
  //res.send("<h1>this is shop page!</h1>");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
