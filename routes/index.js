var express = require('express');
var router = express.Router();
var path = require('path')



router.get('/', (req, res) => {
  res.sendFile(path.join('C:/Users/Inamul/Desktop/minorproject/', '/public/static/home.html'));
  // res.send(index)
})


module.exports = router;
