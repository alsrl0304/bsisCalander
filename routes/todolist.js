var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/todolist', function(req, res, next) {
  res.render('todolist', { title: 'BSIS_TODO_LIST' });
});

module.exports = router;
