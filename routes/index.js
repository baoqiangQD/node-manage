var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(222)
  res.render('dist/index');
});

module.exports = router;
