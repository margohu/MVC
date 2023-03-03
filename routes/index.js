var express = require('express');
var router = express.Router();

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

  // Redirect the user to the birthday page- does not work yet but needed in next user-story
  res.redirect('/seeAll');
});

module.exports = router;
