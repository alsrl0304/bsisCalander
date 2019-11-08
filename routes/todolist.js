const express = require('express');
const router = express.Router();
const { grades, classes } = require('../module/schoolConstants');

/* GET home page. */
router.get('/', function(req, res, next) {
  const query_grade = req.query.grade;
  const query_class = req.query.class;
  res.render('todolist', { title: 'BSIS_TODO_LIST',
    grades, classes,
    query_grade, query_class });
});

module.exports = router;
