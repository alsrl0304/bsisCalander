const express = require('express');
const router = express.Router();
const Todo = require('../models/index.js').Todo;
const { grades, classes } = require('../module/schoolConstants');

/* GET home page. */
router.get('/', function(req, res, next) {
  const query_grade = req.query.grade;
  const query_class = req.query.class;

  Todo.findAll()
  .then((todolist) => {
    res.render('todolist', { title: 'BSIS_TODO_LIST',
      grades, classes,
      query_grade, query_class, todolist });
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

module.exports = router;
