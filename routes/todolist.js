const express = require('express');
const router = express.Router();

const moment = require('moment');
moment.locale('ko');

const Todo = require('../models/index.js').Todo;
const { grades, classes } = require('../module/schoolConstants');

/* GET home page. */
router.get('/', (req, res, next) => {
  const query_grade = req.query.grade;
  const query_class = req.query.class;

  Todo.findAll( {
    attributes: ['title', 'description', 'subject', 'grade', 'class', 'deadline'],
    where: {
      grade: query_grade,
      class: query_class
    }
  })
  .then((todolist) => {
    res.render('todolist', { title: 'BSIS_TODO_LIST',
      grades, classes,
      query_grade, query_class, todolist,
      moment });
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

module.exports = router;
