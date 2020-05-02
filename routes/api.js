const express = require("express");
const router = express.Router();

const Todo = require("../models/index.js").Todo;

/* GET home page. */
router.get("/", (req, res, next) => {
  //res.send("RESPONSE");
  const query_grade = req.query.grade;
  const query_class = req.query.class;

  Todo.findAll({
    attributes: [
      "id",
      "title",
      "description",
      "subject",
      "grade",
      "class",
      "deadline",
    ],
    where: {
      grade: query_grade,
      class: query_class,
    },
  })
    .then((todolist) => {
      todos = JSON.stringify(todolist);
      console.log(todos);
      res.send(todos);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
