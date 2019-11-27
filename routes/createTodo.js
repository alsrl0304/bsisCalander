const express = require('express');
const router = express.Router();
const Todo = require('../models/index.js').Todo;
const { grades, classes } = require('../module/schoolConstants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createTodo', {
    title: 'BSIS_TODO_CREATETODO',
    grades, classes,
  })
});

router.post('/', (req, res, next) => {
  const title = JSON.stringify(req.body.title);
  const description = JSON.stringify(req.body.description);
  const subject = JSON.stringify(req.body.subject);
  const query_grade = req.body.grade;
  const query_class = req.body.class;
  const deadline = req.body.deadline;

  console.log(`
    Title: ${title}
    Description: ${description}
    Subject: ${subject}
    Grade: ${query_grade} | Class: ${query_class}
    Deadline: ${deadline}`);

  Todo.create({
    title, description, subject,
    grade: query_grade,
    class: query_class,
    deadline
  }).then((result) => {
    return res.redirect('/');
  }).catch((err)=>{
    console.error(err);
  })
})

module.exports = router;
