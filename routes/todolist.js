const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const query_grade = req.query.grade;
  const query_class = req.query.class;
  res.render('todolist', { title: 'BSIS_TODO_LIST',
    query_grade, query_class });
});

module.exports = router;
