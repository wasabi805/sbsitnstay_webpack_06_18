var express = require('express');
var router = express.Router();
var path = require('path');


//sendFile HAS TO BE an absolute path
//https://stackoverflow.com/a/25463996/7857134

/* GET home page. */
router.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));});

module.exports = router;
