const express = require("express");
const router = express.Router();
const { grades, classes } = require("../constants/schoolConstants");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "BSIS_TODO", grades, classes });
});

module.exports = router;
