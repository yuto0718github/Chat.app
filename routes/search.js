var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search', { title: 'サーチ結果' });
});

module.exports = router;