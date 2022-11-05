var express = require('express');
var router = express.Router();
var path = require('path')


router.get('/signup', function(req, res, next) {
  res.sendFile(path.join('C:/Users/Inamul/Desktop/minorproject/', '/public/static/adminlogin.html'));
  res.send('register');
});

router.post('/signup', function(req, res, next) {
  console.log(req.body.adminid)
  console.log(req.body.password)
});

// router.get('/register', function(req,res, next){
// });
// router.post('/register', function(req,res, next){
//   console.log(req.body.firstname)
// });

router.get('/login', function(req, res, next) {
  res.send('Login');
});

module.exports = router;
