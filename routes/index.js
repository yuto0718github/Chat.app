var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: 'モイーズコード！',
    content: 'どのクラブを調べたいですか？'
  };
  res.render('index', data);
});

router.post('/post', (req, res, next) =>{
  // var msg = req.body['message'];
  var data = {
    title: 'モイーズコード！',
    content: 'あなたは調べたいんですね、わかります。'
  };
  res.render('index', data);
});

module.exports = router;
