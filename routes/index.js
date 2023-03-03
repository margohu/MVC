var express = require('express');
var router = express.Router();

// Initialize an array to store the birthdays
var seeAll = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Friends Birthdays' });
});

/* GET add birthday page. */
router.get('/addBirthday', function(req, res, next) {
  res.render('addBirthday', { title: 'Add birthday' });
});

/* POST add birthday. */
router.post('/addBirthday', function(req, res, next) {
  var memoTitle = req.body.memoTitle;
  var memoContent = req.body.memoContent;

  // Create a new birthday object and add it to the birthdays array
  var newMemo = { title: memoTitle, content: memoContent };
  seeAll.push(newMemo);

  // Redirect the user to the birthday page
  res.redirect('/seeAll');
});

/* GET all birthdays page. */
router.get('/seeAll', function(req, res, next) {
  res.render('seeAll', { title: 'Kõik sünnipäevad', seeAll: seeAll });
});

module.exports = router;
